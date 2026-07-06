export interface DeveloperData {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
  website: {
    portfolio: string;
  };
}

export interface McStatusData {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  version?: string;
  motd?: {
    clean: string[];
  };
}
