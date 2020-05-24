/* Notes
belongs to one Car
belongs to one User (only creating user has permission to edit/delete)
*/
export default [
    {
      id: '1',
      content: 'Note 1',
      created_at: 'date',
      updated_at: 'date',
      car_id: 'mazda',
      user_id: 'user-test'
    },
    {
        id: '2',
        content: 'Note 2, <strong>bold text</strong> <a href="http://localhost:3000/">link</a>',
        created_at: 'awd',
        updated_at: 'date',
        car_id: 'mazda',
        user_id: 'other-user-test'
    }
  ];