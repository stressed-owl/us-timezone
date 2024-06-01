import { SelectChangeEvent } from "@mui/material";

export interface GetStateTimezoneResponse {
  abbreviation?: string;
  client_ip?: string;
  datetime?: string; // ISO 8601 format
  day_of_week?: number;
  day_of_year?: number;
  dst?: boolean;
  dst_from?: string; // ISO 8601 format
  dst_offset?: number;
  dst_until?: string; // ISO 8601 format
  raw_offset?: number;
  timezone?: string;
  unixtime?: number;
  utc_datetime?: string; // ISO 8601 format
  utc_offset?: string;
  week_number?: number;
}

export interface SelectStateProps {
  state: string;
  onSelectChange: (event: SelectChangeEvent) => void;
}

export interface CardStateProps extends GetStateTimezoneResponse {}
