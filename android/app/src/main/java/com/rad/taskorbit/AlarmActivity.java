package com.rad.taskorbit;

import android.app.Activity;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;
import android.widget.TextView;

public class AlarmActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Remove title bar
        requestWindowFeature(Window.FEATURE_NO_TITLE);

        // Set flags to show activity over lock screen and turn screen on
        getWindow().addFlags(
            WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON |
            WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED |
            WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON |
            WindowManager.LayoutParams.FLAG_FULLSCREEN |
            WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD
        );

        // Create simple TextView as content
        TextView tv = new TextView(this);
        tv.setText("This is your FULL SCREEN ALARM!");
        tv.setTextSize(30f);
        tv.setPadding(500, 100, 500, 100);
        tv.setTextAlignment(TextView.TEXT_ALIGNMENT_CENTER);

        setContentView(tv);
    }
}
