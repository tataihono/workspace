import * as migration_20260323_210412_add_new_block_tables from './20260323_210412_add_new_block_tables';

export const migrations = [
  {
    up: migration_20260323_210412_add_new_block_tables.up,
    down: migration_20260323_210412_add_new_block_tables.down,
    name: '20260323_210412_add_new_block_tables'
  },
];
