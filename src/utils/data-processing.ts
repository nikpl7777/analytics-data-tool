// @todo: Replace with type definitions
import type data from '../data-sources/customers_G2000.json'

import { groupBy, zipObject } from 'lodash'

export const sumVerticalMatrix = (matrix: number[][]) =>
  matrix.reduce((array1, array2) =>
    array1.map((value, index) => value + array2[index])
  )

export const extractColumns = (
  input: typeof data,
  groupByKey: string
): string[] => {
  const dates = input[0].details.map((detail) => detail.date)
  return [groupByKey, ...dates]
}

export const extractRows = (
  input: typeof data,
  groupByKey: string
): (string | number)[][] => {
  const groups = groupBy(input, groupByKey)

  return Object.entries(groups).map(([groupName, accounts]) => {
    const verticalMatrix = accounts.map((account) => [
      ...account.details.map((detail) => detail.ARR),
    ])

    const values = sumVerticalMatrix(verticalMatrix)

    return [groupName, ...values]
  })
}

export const aggregateCollectionToMatrixes = (
  input: typeof data,
  groupByKey: string
): [ReturnType<typeof extractColumns>, ReturnType<typeof extractRows>] => [
  extractColumns(input, groupByKey),
  extractRows(input, groupByKey),
]

export const mapMatrixesToAgGridCollection = ([columns, rows]: ReturnType<
  typeof aggregateCollectionToMatrixes
>) => rows.map((row) => zipObject(columns, row))
