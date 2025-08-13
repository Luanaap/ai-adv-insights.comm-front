export interface AttributeTag {
  label: string;
  value?: string | number;
  type?: string; // for color mapping
}

export interface RecordRow {
  interaction_date: string;
  leader_name: string;
  agent_name: string;
  island_name: string;
  channel_name: string;
  external_id: string;
  case_number: string;
  client_phone_number: string;
  bpo?: string;
  attributes?: (string | AttributeTag)[];
  date_type: string; // 'contestation' | 'contact'
  status: string;
  note: number;
  audio_duration: number; // seconds
  // allow extra fields
  [key: string]: any;
}

export interface RecordGridProps {
  data: RecordRow[];
  onDetail: (row: RecordRow) => void;
  title?: string;
  isLoading?: boolean;
}
