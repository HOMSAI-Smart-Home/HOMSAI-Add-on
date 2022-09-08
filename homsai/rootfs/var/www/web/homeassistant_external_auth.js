function saveAccessToken(result, token) {
    localStorage.setItem('hassTokens','{"access_token":"'+token['access_token']+'","token_type":"Bearer","expires_in":1800,"expires":4124032777000,"refresh_token":"'+token['access_token']+'"}' );
}
