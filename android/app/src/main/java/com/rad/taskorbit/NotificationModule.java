package com.rad.taskorbit;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.os.Handler;
import android.os.Looper;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.os.Build;
import androidx.core.app.NotificationCompat;


public class NotificationModule extends ReactContextBaseJavaModule {

  ReactApplicationContext reactContext;

  public NotificationModule (ReactApplicationContext context) {

    super(context);
    this.reactContext = context;
  }

  @Override
  public String getName() {

    return "NotificationModule";

  }

  @ReactMethod
  public void showNotification(String title, String message) {
    String channelId = "my_channel_id";
    String channelName = "My Channel";

    new Handler(Looper.getMainLooper()).post(() -> {

      NotificationManager notificationManager = (NotificationManager)

      reactContext.getSystemService(Context.NOTIFICATION_SERVICE);

      if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {

        NotificationChannel channel = new NotificationChannel(
          channelId,
          channelName,
          NotificationManager.IMPORTANCE_HIGH
        );

        notificationManager.createNotificationChannel(channel);

      }

      Notification notification = new NotificationCompat.Builder(reactContext, channelId)
        .setContentTitle(title)
        .setContentText(message)
        .setSmallIcon(android.R.drawable.ic_dialog_info)
        .setAutoCancel(true)
        .build();

      notificationManager.notify(1, notification);

    });


  };

}