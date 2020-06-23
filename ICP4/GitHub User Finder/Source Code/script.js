function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)

    var xmlhr = new XMLHttpRequest();
    xmlhr.open('GET', 'https://api.github.com/users/'+user, true);

    xmlhr.onload = function () {
        console.log(xmlhr);
        //If the response is successful show user details
        if (xmlhr.status == 200) {
            showUser(JSON.parse(xmlhr.responseText));
            //else display suitable message
        } else {
            noSuchUser(user);
        }
    };

    xmlhr.send(null);
    return xmlhr;
}

function showUser(user) {
    document.getElementById('nouser').style="display:none";
    document.getElementById('profile').style="display:block";    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    console.log(user);
    document.getElementById('imgavg').src=user.avatar_url;
    document.getElementById('textname').innerText=user.name;
    document.getElementById('textid').innerText=user.id;
    document.getElementById('texturl').href=user.url;
    document.getElementById('texturl').innerText=user.html_url;
    document.getElementById('textscore').innerText=user.bio;

}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    document.getElementById('profile').style="display:none";
    document.getElementById('nouser').style="display:block";
    document.getElementById('nouser').innerHTML="No User Found for "+username;
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
        }
    })
});
