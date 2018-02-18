$(document).ready(function () {

    var isrequest = 1;

   var v= $('#contactForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {
			//$( "#form-submit" ).attr('disabled', true);
            v.resetForm();
            form.reset();
			swal({
				title: " ",
				text: "<h1 class='blue'>Congrats!</h1><p>Thanks for your interest in Nucleus Vision</p><p>We will keep you informed about important dates and details for participating in the token sale.</p><p>Please join our Telegram channel <a class='yellow-link' href='https://t.me/NucleusVision' target='_blank'>here</a></p>",
				type: "success",
				animation: false,
				html: "true"
			});
			
		
			
            $("#form-loader").show();
            if (isrequest == 1) {
                isrequest = 0;
                v.resetForm();
				form.reset();
            }
        }
    });


    var v1 = $('#subscribeForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {
			//$( "#form-submit" ).attr('disabled', true);
            v1.resetForm();
            form.reset();
			swal({
				title: " ",
				text: "<h1 class='blue'>Congrats!</h1><p>Thanks for your interest in Nucleus Vision</p><p>We will keep you informed about important dates and details for participating in the token sale.</p><p>Please join our Telegram channel <a class='yellow-link' href='https://t.me/NucleusVision' target='_blank'>here</a></p>",
				type: "success",
				animation: false,
				html: "true"
			});
			
			
            if (isrequest == 1) {
                isrequest = 0;
                v1.resetForm();
				form.reset();
            }
        }
    });
	
    var modal = document.querySelector('#emailSubscriptionPopup');
    modal.addEventListener('click', function(e) {
        $("#emailSubscriptionPopup").css({"visibility": "hidden", "opacity": "0"});
    }, false);

    modal.children[0].addEventListener('click', function(e) {
        e.stopPropagation();
    }, false);

	$(".emailSubscriptionIcon").on('click', function(e){
        e.preventDefault();
		$("#emailSubscriptionPopup").css({"visibility": "visible", "opacity": "1"});
	});

    $(".emailSubscriptionClose").on('click', function(e){
        e.preventDefault();
        $("#emailSubscriptionPopup").css({"visibility": "hidden", "opacity": "0"});
    });
	
	
	var _subscribeForm = $('.subscribeFormNv').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {
			//$( "#form-submit" ).attr('disabled', true);
			$("#emailSubscriptionPopup").css({"visibility": "hidden", "opacity": "0"});
            _subscribeForm.resetForm();
            form.reset();
			swal({
				title: " ",
				text: "<h1 class='blue'>Congrats!</h1><p>Thanks for your interest in Nucleus Vision</p><p>We will keep you informed about important dates and details for participating in the token sale.</p><p>Please join our Telegram channel <a class='yellow-link' href='https://t.me/NucleusVision' target='_blank'>here</a></p>",
				type: "success",
				animation: false,
				html: "true"
			});

            if (isrequest == 1) {
                isrequest = 0;
                _subscribeForm.resetForm();
				form.reset();
            }
        }
    });


    var v2 = $('#subscribeForm1').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {
			//$( "#form-submit" ).attr('disabled', true);
            v2.resetForm();
            form.reset();
			 swal({
				title: " ",
				text: "<h1 class='blue'>Congrats!</h1><p>Thanks for your interest in Nucleus Vision</p><p>We will keep you informed about important dates and details for participating in the token sale.</p><p>Please join our Telegram channel <a class='yellow-link' href='https://t.me/NucleusVision' target='_blank'>here</a></p>",
				type: "success",
				animation: false,
				html: "true"
			});
			
			
            if (isrequest == 1) {
                isrequest = 0;
				v2.resetForm();
				form.reset();
            }
        }
    });
	
	
	var saleenqform = $('#saleenqform').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {
			$("#sale-form-loader").show();
            if (isrequest == 1) {
                isrequest = 0;
                $.ajax({
                    type: "POST",
                    url: "/tokensale-enq.php",
                    data: $(form).serialize(),
                    success: function (response) {
                        if (response == "success") {
							$("#sale-form-loader").hide();
                            swal({
                                title: " ",
                                text: "<h1 class='blue'>Congrats!</h1><h4>You have successfully submitted.!</h4>",
                                type: "success",
                                animation: false,
                                html: "true"
                            });
                            saleenqform.resetForm();
                            form.reset();
                        } else {
							$("#sale-form-loader").hide();
                            swal({
                                title: "Nucleus Vision TOKEN SALE!",
                                text: "Error While Submitting. Please Try Again.",
                                type: "error",
                                animation: false,
                                html: "true"
                            });
                        }
                        isrequest = 1;
                    }
                });
            }
        }
    });	


});