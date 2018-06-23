package com.groupandrews.app;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;


import java.util.ArrayList;

@NativePlugin()
public class LoggerPlugin extends Plugin {
    private DbAccess db;

    protected void onCreate(Bundle savedInstanceState) {
        Log.d("xxx", "[user: " + savedInstanceState + "]");

//        super.onCreate(savedInstanceState);
//        mAuth = FirebaseAuth.getInstance    ();
//        userList = new ArrayList<FirebaseUser>();
//
//        FirebaseUser currentUser = mAuth.getCurrentUser();
//        Log.d(TAG, "[user: " + currentUser.getEmail() + "]");
//        Log.d(TAG, "[userlistSize: " + userList.size() + "]");
//        updatePreferences();
//        TXT_START = getString(R.string.button_start);
//        TXT_STOP = getString(R.string.button_stop);
//        setContentView(R.layout.activity_main);
//        Toolbar myToolbar = findViewById(R.id.my_toolbar);
//        setSupportActionBar(myToolbar);
//        toggleButton = findViewById(R.id.toggle_button);
//        syncErrorLabel = findViewById(R.id.sync_error);
//        syncLabel = findViewById(R.id.sync_status);
//        syncLed = findViewById(R.id.sync_led);
//        locLabel = findViewById(R.id.location_status);
//        locLed = findViewById(R.id.loc_led);

    }

    @PluginMethod()
    public void customCall(PluginCall call) {
        db = DbAccess.getInstance();
        db.open(this);
        String trackName = db.getTrackName();

        registerBroadcastReceiver();
        updateStatus();
    }

        //        String value = call.getString("value");
//        Log.d("xxx", "[user: " + call.getString("value") + "]");
//
//        JSObject ret = new JSObject();
//        ret.put("value", value);
//        call.success(ret);
//    }
}