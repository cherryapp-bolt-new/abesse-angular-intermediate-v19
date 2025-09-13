import { FilterTablePipe } from './filter-table.pipe';

describe('FilterTablePipe', () => {
  let pipe: FilterTablePipe;

  beforeEach(() => {
    pipe = new FilterTablePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all items when no filter text', () => {
    const items = [
      { id: 1, title: 'Test1', price: 42 },
      { id: 2, title: 'Test2', price: 50 }
    ];
    const result = pipe.transform(items, '');
    expect(result).toEqual(items);
  });

  it('should return all items when filter text is undefined', () => {
    const items = [
      { id: 1, title: 'Test1', price: 42 },
      { id: 2, title: 'Test2', price: 50 }
    ];
    const result = pipe.transform(items, undefined as any);
    expect(result).toEqual(items);
  });

  it('should filter items by string values', () => {
    const items = [
      { id: 1, title: 'Test1', price: 42 },
      { id: 2, title: 'Test2', price: 50 }
    ];
    const result = pipe.transform(items, 'Test1');
    expect(result).toEqual([{ id: 1, title: 'Test1', price: 42 }]);
  });

  it('should filter items by number values', () => {
    const items = [
      { id: 1, title: 'Test1', price: 42 },
      { id: 2, title: 'Test2', price: 50 }
    ];
    const result = pipe.transform(items, '42');
    expect(result).toEqual([{ id: 1, title: 'Test1', price: 42 }]);
  });

  it('should be case insensitive', () => {
    const items = [
      { id: 1, title: 'Test1', price: 42 },
      { id: 2, title: 'Test2', price: 50 }
    ];
    const result = pipe.transform(items, 'test1');
    expect(result).toEqual([{ id: 1, title: 'Test1', price: 42 }]);
  });

  it('should handle null and undefined values', () => {
    const items = [
      { id: 1, title: 'Test1', price: null },
      { id: 2, title: 'Test2', price: 50 }
    ];
    const result = pipe.transform(items, 'Test');
    expect(result).toEqual([
      { id: 1, title: 'Test1', price: null },
      { id: 2, title: 'Test2', price: 50 }
    ]);
  });
});