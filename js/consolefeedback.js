let saveFile = () => {

    // Get the data from each element on the form.
    const name = document.getElementById('fName');
    const email = document.getElementById('Email');
   const gender = document.querySelector('input[name="gender"]:checked');
   const rat1= document.querySelector('input[name="rating1"]:checked');
   const rat2= document.querySelector('input[name="rating2"]:checked');
   const rat3= document.querySelector('input[name="rating3"]:checked');
    const  commontext= document.getElementById('commontext');

    // This variable stores all the data.
    let data = 
        '\r Name: ' + name.value + ' \r\n ' +
        'Email: ' + email.value + ' \r\n ' + 
        'gender: '+ gender.value + ' \r\n ' +
        'rat1: '+ rat1.value + ' \r\n ' +
        'rat2: '+ rat2.value + ' \r\n ' +
        'rat3: '+ rat3.value + ' \r\n ' +
        'commontext: ' + commontext.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }

    newLink.click(); 
  }