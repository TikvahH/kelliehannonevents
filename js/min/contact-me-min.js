$(document).ready(function(){$("#contact-form [type='submit']").click(function(t){t.preventDefault(),$(".content-about").animate({scrollTop:$("#answer").offset().top},"slow");var e=$("input[name=name]").val(),a=$("input[name=email-address]").val(),s=$("input[name=subject]").val(),n=$("textarea[name=message]").val();post_data={userName:e,userEmail:a,userSubject:s,userMessage:n},$.post("../php/contact-me.php",post_data,function(t){"error"==t.type?output='<div class="error-message"><p>'+t.text+"</p></div>":(output='<div class="success-message"><p>'+t.text+"</p></div>",$("#contact-form input").val(""),$("#contact-form textarea").val("")),$("#answer").hide().html(output).fadeIn()},"json")}),$("#contact-form input, #contact-form textarea").keyup(function(){$("#answer").fadeOut()})});
