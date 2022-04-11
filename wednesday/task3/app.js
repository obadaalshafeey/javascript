let task3=document.getElementById('country');
function changeFlag(){
     if (task3.value=== 'Norway'){
         document.getElementById('flag').src='https://th.bing.com/th/id/R.a24c7430ce582a78db3ca345c6b8114a?rik=fuM7357lyQtUAg&riu=http%3a%2f%2fwww.theflagman.co.uk%2fwp-content%2fuploads%2f2017%2f03%2fflag-of-Norway.jpg&ehk=p1CiZZUAz3jzNW%2fll8ROghxbz%2bqKtnaf2tJV5uwAyBU%3d&risl=&pid=ImgRaw&r=0';
         document.getElementById('flag').alt='Norway'
     }
     else if (task3.value==='America'){
        document.getElementById('flag').src='https://th.bing.com/th/id/OIP.DP3Vo8PEReh_qJwHkl95mwHaEC?pid=ImgDet&rs=1';
        document.getElementById('flag').alt='America'
     }
     else if(task3.value==='Spain'){
         document.getElementById('flag').src='https://th.bing.com/th/id/OIP.Y-wvFU0O_d-FYXjEZPPecAHaEK?pid=ImgDet&rs=1';
         document.getElementById('flag').alt='Spain'
     }
     else if(task3.value==='England'){
         document.getElementById('flag').src='https://preview.redd.it/7fhyzd05y58y.png?auto=webp&s=ef156ae1323bce8fbe9bccae566d368f55f0e37a';
         document.getElementById('flag').alt='England';
     }
 };