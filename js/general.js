$(document).ready(function() {
    $(".icon-arrow-down").click(function() {
        $('html,body').animate({
            scrollTop: $(".second-section").offset().top},600);
    });
    
    
    //FORM
        $(".submit").click(function(){
            var fname = document.getElementById("fname").value;
            var lname = document.getElementById("lname").value;
            var email = document.getElementById("email").value;
            var phone1 = document.getElementById("phone1").value;
            var phone2 = document.getElementById("phone2").value;
            var phone3 = document.getElementById("phone3").value;
            var state = document.getElementById("state").value;
            var sloan = document.getElementById("sloan").value;
            var credit = document.getElementById("credit").value;
            
            if (fname.length > 1) {
                $('#fname').removeClass("fail");
                if (lname.length > 1) {
                    $('#lname').removeClass("fail")
                    if (email.length > 1) {
                        $('#email').removeClass("fail")
                        if (phone1.length > 1) {
                            $('#phone1').removeClass("fail")
                            if (phone2.length > 1) {
                                $('#phone2').removeClass("fail")
                                if (phone3.length > 1) {
                                    $('#phone3').removeClass("fail")
                                    if (state.length > 1) {
                                        $('#state').removeClass("fail")
                                        if (sloan.length > 1) {
                                        $('#sloan').removeClass("fail")
                                            if (credit.length > 1) {
                                            $('#credit').removeClass("fail")
                                            mandrill()
                                            }
                                            else {
                                                $('#credit').addClass("fail")
                                                $('#credit').focus()
                                            }
                                        }
                                        else {
                                            $('#sloan').addClass("fail")
                                            $('#sloan').focus()
                                        }
                                    }
                                    else {
                                        $('#state').addClass("fail")
                                        $('#state').focus()
                                    }
                                }
                                else {
                                    $('#phone3').addClass("fail")
                                    $('#phone3').focus()
                                }
                            }
                            else {
                                $('#phone2').addClass("fail")
                                $('#phone2').focus()
                            }
                        }
                        else {
                            $('#phone1').addClass("fail")
                            $('#phone1').focus()
                        }
                    }
                    else {
                        $('#email').addClass("fail")
                        $('#email').focus()
                    }
                }
                else {
                    $('#lname').addClass("fail")
                    $('#lname').focus()
                }
            }
            else {
                $('#fname').addClass("fail")
                $('#fname').focus()
            }
            function mandrill() {
                var formData = {
                    "key": "1-mhUdqJ5OFL3LXYxqyeFA",
                    "message": {
                        "html": "<h3>New Lead!</h3><p>Name: "+fname+" "+lname+"<br>Email: "+email+"<br>Phone Number: ("+phone1+")-"+phone2+"-"+phone3+"<br>State: "+state+"<br>Student Loan Debt Amount: "+sloan+"<br>Credit Card Debt: "+credit+"</p>",
                        "subject": "Easy Student Loan",
                        "from_email": email,
                        "from_name": fname,
                        "to": [
                            {
                            "email": "chriskanze@gmail.com",
                            "name": "Chris Kanze",
                            "type": "to"
                            }
                        ]
                    }
                };
    
                $.ajax({
                    url : "https://mandrillapp.com/api/1.0/messages/send.json",
                    type: "POST",
                    data : formData,
                    success: function(data, textStatus, jqXHR){
                        console.log("SUBMITTED")
			$('.submit').replaceWith('<button type="button" class="btn btn-success submit">Sent!</button>')
			window.location.href  = 'https://www.finleysolutions.com/student-loan-reform.html';
			
			
                    },
                    error: function (jqXHR, textStatus, errorThrown){
                        $('#email').addClass("fail")
                        $('#email').focus()
                    }
                });
            }
            
            console.log(fname)
            console.log(lname)
            console.log(email)
            console.log(phone1)
            console.log(phone2)
            console.log(phone3)
            console.log(sloan)
        })
    });