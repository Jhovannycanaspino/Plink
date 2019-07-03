export interface IConvert {
  success: boolean;
  source: string;
  request_date: string;
  from_quantity: number;
  from_symbol: string;
  from_name: string;
  to_symbol: string;
  to_name: string;
  to_quantity: number;
}
