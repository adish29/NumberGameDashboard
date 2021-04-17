firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    // console.log(user.email + ' is signed in')
    var userId = user.uid;
	  var email = user.email;
	  readUserData(userId,email)
	
	
  } else {
    console.log('No user is currently signed in')
    // window.location.href="admin.html"
  }
});


function readUserData(uid,email)
{
  var ref = firebase.database().ref('Teqmo/' + 'Stores/' + uid + '/details');
  ref.on('value', (snapshot) => {
  const data = snapshot.val();
  
  (data.State == "")?(document.getElementById("stateHeader").innerHTML ="N.A."):(document.getElementById("stateHeader").innerHTML = data.State)
  // document.getElementById("stateHeader").innerHTML = data.State;
   // (data.OwnerName == "")?(document.getElementById("profileName").innerHTML ="N.A."):(document.getElementById("profileName").innerHTML = data.OwnerName)
   // (data.OwnerName == "")?(document.getElementById("name").innerHTML ="N.A."):(document.getElementById("name").innerHTML += " " + data.OwnerName)
   // (data.OwnerName == "")?(document.getElementById("headerName").innerHTML ="N.A."):(document.getElementById("headerName").innerHTML += data.OwnerName)
   // (email == "")?(document.getElementById("profileEmail").innerHTML ="N.A."):(document.getElementById("profileEmail").innerHTML = email)
   // (email == "")?(document.getElementById("email").innerHTML ="N.A."):(document.getElementById("email").innerHTML += " " + email)
   // (data.StoreName == "")?(document.getElementById("storeHeader").innerHTML ="N.A."):(document.getElementById("storeHeader").innerHTML = data.StoreName)
   // (data.StoreName == "")?(document.getElementById("store").innerHTML ="N.A."):(document.getElementById("store").innerHTML +=" " +  data.StoreName)
   // (data.CompanyName == "")?(document.getElementById("company").innerHTML ="N.A."):(document.getElementById("company").innerHTML += " " + data.CompanyName)
   // (data.Phone == "")?(document.getElementById("contact").innerHTML ="N.A."):(document.getElementById("contact").innerHTML +=" " +  data.Phone)
   // (data.Address == "")?(document.getElementById("address").innerHTML ="N.A."):(document.getElementById("address").innerHTML +=" " +  data.Address)
   // // (data.City == "")?(document.getElementById("cityState").innerHTML ="N.A."):(document.getElementById("stateHeader").innerHTML = data.State)
   // // (data.State == "")?(document.getElementById("cityState").innerHTML ="N.A."):(document.getElementById("stateHeader").innerHTML = data.State)
   // (data.Zipcode == "")?(document.getElementById("zipcode").innerHTML ="N.A."):(document.getElementById("zipcode").innerHTML += " " + data.Zipcode)

   document.getElementById("profileName").innerHTML = data.OwnerName
   document.getElementById("name").innerHTML += " " + data.OwnerName
   document.getElementById("headerName").innerHTML += data.OwnerName
   document.getElementById("profileEmail").innerHTML = email
   document.getElementById("email").innerHTML += " " + email
   document.getElementById("storeHeader").innerHTML = data.StoreName
   document.getElementById("store").innerHTML +=" " +  data.StoreName
   document.getElementById("company").innerHTML += " " + data.CompanyName
   document.getElementById("contact").innerHTML +=" " +  data.Phone
   document.getElementById("address").innerHTML +=" " +  data.Address
   document.getElementById("zipcode").innerHTML += " " + data.Zipcode
   document.getElementById("cityState").innerHTML +=" " +  data.City + ", " + data.State;
  


});
}