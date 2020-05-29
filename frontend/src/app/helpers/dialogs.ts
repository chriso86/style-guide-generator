import {MatDialogConfig} from '@angular/material/dialog';

export const getDialogConfig = (): MatDialogConfig => {
  const config = new MatDialogConfig();

  config.maxWidth = '100%';
  config.minWidth = '250px';

  return config;
};
