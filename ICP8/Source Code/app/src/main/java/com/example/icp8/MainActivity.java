package com.example.icp8;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button loginv = findViewById(R.id.login);



        loginv.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                EditText username = (EditText) findViewById(R.id.username);
                EditText password = (EditText) findViewById(R.id.password);
                final String usernamev = username.getText().toString();
                final String passwordv = password.getText().toString();
                boolean validationFlag = false;

                if (!usernamev.isEmpty() && !passwordv.isEmpty()) {
                    if (usernamev.equals("pranay") && passwordv.equals("pranay")) {
                        validationFlag = true;

                    }
                }
                if (!validationFlag) {
                    Toast toast = Toast.makeText(getApplicationContext(), "Please enter valid Username and Password", Toast.LENGTH_SHORT);
                    toast.setMargin(50, 50);
                    toast.setGravity(Gravity.TOP|Gravity.CENTER_HORIZONTAL, 0, 0);
                    toast.show();
                } else {
                    //This is for redirecting to the home page.
                    Intent redirect = new Intent(MainActivity.this, HomeActivity.class);
                    startActivity(redirect);
                }
            }
        });
    }
}