import { Meteor } from "meteor/meteor";

import "/imports/api/dynamic_pages/server/methods";
import "/imports/api/dynamic_pages/server/publication";
import "/imports/api/accounts/server/methods";

Meteor.startup(() => {
  const first_user = Meteor.users.findOne();
  if (!first_user) {
    console.log("Création d'un premier utilisateur");
    const user_id = Accounts.createUser({
      email: "jo@mail.com",
      password: "test",
      username: "admin"
    });

    Roles.addUsersToRoles(user_id, "admin");
  }
});
