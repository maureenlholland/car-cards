/* Notes
belongs to car
belongs to user (only user has permission to edit/delete)
*/
export default [
    {
      id: '1',
      content: 'Note 1',
      created_at: 'date',
      updated_at: 'date',
      car_id: 'mazda',
      user_id: '1'
    },
    {
        id: '2',
        content: 'Note 2, <strong>bold text</strong> <a href="http://localhost:3000/">link</a>',
        created_at: 'awd',
        updated_at: 'date',
        car_id: 'mazda',
        user_id: '1'
    }
  ];