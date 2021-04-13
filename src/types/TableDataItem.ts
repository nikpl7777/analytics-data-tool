import type { DataAggregationFields } from '../models/DataAggregationFields'
export type TableDataItem = {
  [k in keyof typeof DataAggregationFields]: any
} & {
  readonly [k: string]: number
}
