document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const signupForm = document.querySelector('form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const mobile = document.getElementById('mobile').value.trim();
            const nationalCode = document.getElementById('nationalCode').value.trim();
            const fullName = document.getElementById('fullName').value.trim();
            const termsAccepted = document.getElementById('termsCheck').checked;
            
            // Validation
            if (!mobile || !nationalCode || !fullName) {
                alert('لطفاً تمامی فیلدهای الزامی را پر کنید.');
                return;
            }
            
            // Mobile number validation (Iranian format)
            const mobileRegex = /^09\d{9}$/;
            if (!mobileRegex.test(mobile)) {
                alert('لطفاً شماره موبایل را به فرمت صحیح وارد کنید (09xxxxxxxxx).');
                return;
            }
            
            // National code validation (10 digits)
            const nationalCodeRegex = /^\d{10}$/;
            if (!nationalCodeRegex.test(nationalCode)) {
                alert('کد ملی باید ۱۰ رقم باشد.');
                return;
            }
            
            if (!termsAccepted) {
                alert('لطفاً قوانین و شرایط استفاده از خدمات را بپذیرید.');
                return;
            }
            
            // In a real application, you would send the data to a server here
            alert('کد تایید به شماره موبایل شما ارسال شد. لطفاً صفحه بعدی را برای ادامه ثبت‌نام مشاهده کنید.');
            
            // For demonstration purposes, we'll redirect to a sample next page
            // In a real app, this would be handled by the server
            // window.location.href = 'signup2.html';
        });
    }
    
    // Input formatting for mobile number
    const mobileInput = document.getElementById('mobile');
    if (mobileInput) {
        mobileInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
            
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            
            e.target.value = value;
        });
    }
    
    // Input formatting for national code
    const nationalCodeInput = document.getElementById('nationalCode');
    if (nationalCodeInput) {
        nationalCodeInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
            
            if (value.length > 10) {
                value = value.substring(0, 10);
            }
            
            e.target.value = value;
        });
    }
    
    // Add focus effects to custom input groups
    const inputs = document.querySelectorAll('.custom-input-group .form-control');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('.input-icon img').style.filter = 'brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(421%) hue-rotate(101deg) brightness(92%) contrast(85%)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('.input-icon img').style.filter = 'none';
        });
    });
});