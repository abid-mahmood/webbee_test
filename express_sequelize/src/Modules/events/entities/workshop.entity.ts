import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  BelongsTo
} from 'sequelize-typescript';
import { ModelAttributeColumnOptions } from 'sequelize';
import Event from './event.entity';


@Table({
  updatedAt: false,
})
export default class Workshop extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  declare id: number;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  start: string;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  end: string;

  @Column({
    type: 'integer',
    defaultValue: null,
  } as ModelAttributeColumnOptions)
  eventId: number;

  @Column
  name: string;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  declare createdAt: string;

  @BelongsTo(() => Event, 'eventId')
  event: Event;
}
