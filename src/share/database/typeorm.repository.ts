import { BaseEntity, DeepPartial, Repository } from 'typeorm';

export class TypeOrmRepository<T extends BaseEntity> {
  public repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  create(data: DeepPartial<T>): T {
    return this.repository.create(data);
  }
  save(data: any): Promise<T> {
    return this.repository.save(data);
  }

  update(
    id: string | number | string[] | Date | number[] | Date[],
    data: any,
  ): Promise<any> {
    return this.repository.update(id, data);
  }

  delete(
    id: string | number | string[] | Date | number[] | Date[],
  ): Promise<any> {
    return this.repository.delete(id);
  }

  async findOneByCondition(conditions: any): Promise<T> {
    return this.repository.findOne(conditions);
  }
}
