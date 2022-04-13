window.onload = function() {
    const firebaseConfig = {
        apiKey: "AIzaSyBl3hcpS-74nWBcKQqpR8wA8OFibJBXTf4",
        authDomain: "qube-health-app.firebaseapp.com",
        projectId: "qube-health-app",
        storageBucket: "qube-health-app.appspot.com",
        messagingSenderId: "157390100315",
        appId: "1:157390100315:web:6727d9609a52090536ec7e",
        measurementId: "G-KZ5TRKZ9KE"
    };
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.          
        }
    });
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
        'size': 'invisible',
        'callback': function(response) {
            onSignInSubmit();
        }
    });
    recaptchaVerifier.render().then(function(widgetId) {
        window.recaptchaWidgetId = widgetId;
    });
};

function onSignInSubmit() {
    if (true) {
        window.signingIn = true;
        var phoneNumber = "+91" + document.getElementById("phoneNo").value;
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function(confirmationResult) {
                window.confirmationResult = confirmationResult;
                window.signingIn = false;
                console.log("sent");
            }).catch(function(error) {
                console.error('Error during signInWithPhoneNumber', error);
                window.signingIn = false;
            });
    }
}

function onVerifyCodeSubmit() {
    if (true) {
        window.verifyingCode = true;
        var code = document.getElementById("otp").value;

        window.confirmationResult.confirm(code).then(function(result) {
            console.log("signed in");
            var user = result.user;
            window.verifyingCode = false;
            window.confirmationResult = null;
            window.location.href = "upload_docs.html"
        }).catch(function(error) {
            window.verifyingCode = false;
            alert('Wrong Verification code');
        });
    }
}