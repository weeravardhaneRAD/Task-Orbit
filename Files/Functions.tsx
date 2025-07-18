import { Alert, Platform } from "react-native";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";
import type { Permission } from "react-native-permissions";

type PermissionKey = "PostNotification";

const F = {

  RequestPermission: async (p:PermissionKey) => {


    const permissions:Record<PermissionKey, Permission> = {

      PostNotification: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
    }

    if(Platform.OS === "android" && Platform.Version >= 33)
    {
      const ps1 = await check(permissions[p])
  
      if(ps1 !== RESULTS.GRANTED)
      {
        const ps2 = await request(permissions[p])
  
        if(ps2 !== RESULTS.GRANTED)
        {
          Alert.alert("Permission Needed", "Permission is required for the app to work properly." )
        }
      }
    }
  }
}

export default F;