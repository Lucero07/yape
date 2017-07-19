var api = {
    url: 'http://localhost:3000/api/registerNumber'
};


 $.post(api.url,{
	 'phone': '1234567890',
	 'terms': 'true'
 }).then(function(response){
	 console.log(response);
 }).catch(function(error){
	 console.log(error);
 })
