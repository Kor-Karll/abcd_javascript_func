var users2 = [
    new User(1, "ID", 32),
    new User(2, "HA", 25),
    new User(3, "BJ", 32),
    new User(4, "PJ", 28),
    new User(5, "JE", 27),
    new User(6, "JM", 32),
    new User(7, "HI", 24)
  ];
  function findBy(key, list, val) {
    for (var i = 0, len = list.length; i < len; i++) {
      if (list[i][key] === val) return list[i];
    }
  }
  console.log(findBy("age", users2, 25));
  // undefined
  

function find(list, predicate) {
    for (var i = 0, len = list.length; i < len; i++) {
      if (predicate(list[i])) return list[i];
    }
  }
  
  console.log(
    find(users2, function(u) {
      return u.getAge() == 25;
    }).getName()
  );
  