// @todo: Replace with type definitions
import type data from '../data-sources/customers_G2000.json'

import { map, groupBy, zipObject } from 'lodash'

export const sumVerticalMatrix = (matrix: number[][]) =>
  matrix.reduce((array1, array2) =>
    array1.map((value, index) => value + array2[index])
  )

export const extractColumns = (
  input: typeof data,
  aggregateByKey: string
): string[] => {
  if (!input.length) {
    return [aggregateByKey]
  }
  const dates = map(input[0].details, 'date')
  return [aggregateByKey, ...dates]
}

export const extractRows = (
  input: typeof data,
  aggregateByKey: string
): (string | number)[][] => {
  const groups = groupBy(input, aggregateByKey)

  return Object.entries(groups).map(([groupName, accounts]) => {
    const verticalMatrix = map(accounts, (account) =>
      map(account.details, 'ARR')
    )

    const values = sumVerticalMatrix(verticalMatrix)

    return [groupName, ...values]
  })
}

export const aggregateCollectionToMatrixes = (
  input: typeof data,
  aggregateByKey: string
): [ReturnType<typeof extractColumns>, ReturnType<typeof extractRows>] => [
  extractColumns(input, aggregateByKey),
  extractRows(input, aggregateByKey),
]

export const mapMatrixesToAgGridCollection = ([columns, rows]: ReturnType<
  typeof aggregateCollectionToMatrixes
>) => rows.map((row) => zipObject(columns, row))
