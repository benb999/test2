
$(document).ready(function () {
	
	$.validator.addMethod("cus_url", function(value, element) { 
    if(value.substr(0,7) != 'http://' && value.substr(0,8) != 'https://'){
        value = 'http://' + value;
    }
    if(value.substr(value.length-1, 1) != '/'){
        value = value + '/';
    }
    return this.optional(element) || /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,20}(:[0-9]{1,5})?(\/.*)?$/i.test(value); 
	
}, "Please enter a valid URL.");

	$.validator.addMethod("erc20_valid", function(value, element) { 
    
    return 0 == value.search(/^0x[a-fA-F0-9]{40}$/); 
	
}, "Invalid ERC-20 Wallet Address.");
	

    var isAjaxFormRequestSent = 1;

	var redditcampainform = $('#banner-setting-form').validate({
        rules: {
            description: {
                required: true
            },
            link_title: {
                required: false
            },
            nav_link: {
                required: false,
                 url: true
            }
        },
        submitHandler: function (form) {
			$("#presale-saft-form-loader").show();
            if (isAjaxFormRequestSent == 1) {
                isAjaxFormRequestSent = 0;
                $.ajax({
                    type: "POST",
                    url: "/ajax-banner-form.php",
                    data: $(form).serialize(),
                    success: function (response) {
                        if (response == "success") {
							$("#presale-saft-form-loader").hide();
                            swal({
                                title: " ",
                                text: "<h1 class='blue'>Congrats!</h1><h4>Your request successfully submitted!</h4>",
                                type: "success",
                                animation: false,
                                html: "true"
                            });
                            redditcampainform.resetForm();
                            form.reset();
                        } else {
							$("#presale-saft-form-loader").hide();
                            swal({
                                title: "Error!",
                                text: "Error While Submitting. Please Try Again.",
                                type: "error",
                                animation: false,
                                html: "true"
                            });
                        }
                        isAjaxFormRequestSent = 1;
                    }
                });
            }
        }
    });
	
});