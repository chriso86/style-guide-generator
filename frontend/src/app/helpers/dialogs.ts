import {MatDialogConfig} from '@angular/material';

export const getDialogConfig = (): MatDialogConfig => {
  const config = new MatDialogConfig();

  config.maxWidth = '100%';
  config.minWidth = '250px';

  return config;
};
