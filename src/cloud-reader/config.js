/*
Copyright 2020 Eduworks Corporation
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

window.PeBLConfig = {}
// window.PeBLConfig.PeBLServicesURL = 'https://dev.services.peblproject.org';
// window.PeBLConfig.PeBLServicesWSURL = 'wss://dev.services.peblproject.org';
// window.PeBLConfig.PeBLServicesURL = '__HTTP_SERVICES_ENDPOINT__';
// window.PeBLConfig.PeBLServicesWSURL = '__WS_SERVICES_ENDPOINT__';
window.PeBLConfig.PeBLServicesURL = 'https://localhost:8080';
window.PeBLConfig.PeBLServicesWSURL = 'wss://localhost:8080';
window.PeBLConfig.useOpenID = true;
window.PeBLConfig.useLinkedIn = true;
window.PeBLConfig.loginText = 'LinkedIn login is required to access the eFieldbooks. This is similar to using Google or Facebook to log in instead of setting up an account via email. If you do not have a LinkedIn account, you can register one for free here. The purpose of the LinkedIn login is to provide an encrypted ID to the eFieldbook so users can securely interact with that eFieldbook, take notes, and make contributions. The eXtension Foundation is not collecting your personal information. In order to receive update notices from eXtension, we invite you to opt-in the first time you enter an eFieldbook by providing your desired email address.';
window.PeBLConfig.favicon = 'images/PEBL-icon-16.ico';
window.PeBLConfig.loginImage = 'images/PEBL-Logo-Color-small.png';
window.PeBLConfig.userList = ['Learner', 'Learner1', 'Learner2', 'Learner3', 'Learner5', 'Learner7'];
window.PeBLConfig.version = "VERSION";
window.DEBUGGING = false;
