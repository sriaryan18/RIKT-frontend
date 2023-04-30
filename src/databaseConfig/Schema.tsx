import Realm from "realm";
class Profile extends Realm.Object<Profile> {
    _id!: Realm.BSON.ObjectId;
    name!: string;
  
    static schema = {
      name: 'Profile',
      properties: {
        _id: 'objectId',
        name: 'string',
      },
      primaryKey: '_id',
    };
  }
 export const realmConfig: Realm.Configuration = {
    schema: [Profile],
  };

export default Profile;