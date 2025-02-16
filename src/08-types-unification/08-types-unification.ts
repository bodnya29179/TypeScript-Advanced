{
  /* Attempt #1 */

  // ❌ TS doesn't merge enums with types.
  type PermissionType = 'user' | 'admin';

  // And we can't name them the same.
  enum Permission {
    user = 'user',
    admin = 'admin', // as PermissionType - cannot be used, types conflict
  }
}


{
  /* Attempt #2 */
  type PermissionType = `${Permission}`;

  enum Permission {
    user = 'user',
    admin = 'admin',
  }

  const test1: Permission = 'user'; // ❌ Error: enum expects `Permission.user`
  const test2: Permission = Permission.user; // ✅ Works
  const test3: PermissionType = 'user'; // ✅ Works
  const test4: PermissionType = Permission.user; // ✅ Works

  function something(prop: PermissionType): void { /* ... */ }

  something('user'); // ✅ Allowed
  something(Permission.user); // ✅ Allowed
}


{
  /* Attempt #3 */

  /* ✅ The same name, but type checking is incorrect */
  type Permission = 'user' | 'admin';

  const Permission = {
    user: 'user' as Permission,
    admin: 'admin' as Permission,
    something: 'test' as Permission, // ❌ Incorrectly allows a wrong value
  };

  const test1: Permission = 'user'; // ✅ Works
  const test2: Permission = Permission.something; // ❌ Incorrect type setting
  const test3: Permission = 'user'; // ✅ Works
  const test4: Permission = Permission.user; // ✅ Works

  function something(prop: Permission): void { /* ... */ }

  something('user'); // ✅ Works
  something(Permission.user); // ✅ Works
}


{
  /* Attempt #4 */

  /* ✅ The same name */
  const Permission = {
    user: 'user',
    admin: 'admin',
  } as const;

  type Permission = typeof Permission[keyof typeof Permission];

  const test1: Permission = 'user'; // ✅ Works
  const test2: Permission = Permission.user; // ✅ Works
  const test3: Permission = 'admin'; // ✅ Works
  const test4: Permission = Permission.user; // ✅ Works

  function something(prop: Permission): void { /* ... */ }

  something('user'); // ✅ Works
  something(Permission.user); // ✅ Works
}
