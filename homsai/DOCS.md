# Homsai Engine - Quick Setup

## Register for the Closed Beta

1. To access the Homsai Engine features exclusively, visit www.homsai.app and leave your email.
2. You will receive an email with the password to access the Homsai engine once installed.

## Add-On Installation

1. From the sidebar of the Home Assistant instance, click on "Configuration"
2. From the menu click on "Additional components, backup and Supervisor"
3. At the bottom right click on "Add-On Store"
4. From the Add-On Store, click on the icon at the top right and select "Repositories"
5. A popup will open: paste this link (https://github.com/HOMSAI-Smart-Home/HOMSAI-Add-on) inside and press "Add"
6. You will see Homsai Engine in the “Local Add-On” list, click on it
   From the Homsai Engine screen click on "Install"

## Sensors configuration

1. Inside the Homsai Engine you will see a side menu, click on "Settings"
2. Select the sensors necessary for the proper functioning of the Engine. General Power Meter, HVAC Power Meter, and Photovoltaic Production Power are required, while Phovoltaic Storage Power is optional but recommended. For more information on sensors click here
3. Click on “Save” to save the configuration

## HVAC initialization

1. From the side menu click on "HVAC Devices"
2. From the HVAC Devices screen click on "Start Initialization"
3. From the confirmation popup click on "Continue"
4. From now on, device initialization is active: within a set time, Homsai Engine will retrieve the list of HVAC Devices and consumption data

## Activate Optimizer

1. From the HVAC Devices screen click on Photovoltaic Optimizer
2. If you want to activate the optimizer on all HVAC Devices, check the "Enabled" checkbox at the top of the table
3. Clicking instead on the single Device opens the detail
4. Check the "Enabled" checkbox if you want to enable or disable the optimizer on the single device
5. Check the "Auto" checkbox if you want to switch from Auto mode (device managed by the Engine) or Manual (device managed by the user). Manual mode is reset to “Auto” at midnight the next day
6. In the "Desired Temperature" field, enter the temperature that the Device must reach
7. In the "Restricted Start Hour" and "Restricted End Hour" fields, the user can indicate the beginning and end of the period in which the Device is in Auto mode and is included in the Optimizer calculations. Outside this time slot, the device is moved to Manual mode. Leave these fields blank to always keep the Optimizer active on the single device
   8.Once the configuration is finished, press “Save” to save.

## Additional Resources

- Read the full documentation [here](https://homsai.app/wp-content/uploads/2022/06/doc-Homsai-Engine.pdf)
- Any other questions? Please contact our support team [clicking here](mailto:hello@homsai.app)
