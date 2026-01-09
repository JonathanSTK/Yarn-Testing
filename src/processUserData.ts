// User service - handles user data operations

export function processUserData(users: any) {
    var result = [];
    
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        
        // Check if user is active
        if (user.status == 'active') {
            var userData: any = {
                name: user.firstName + ' ' + user.lastName,
                email: user.email,
                age: user.age,
            };
            
            // Calculate days since registration
            var today = new Date();
            var regDate = new Date(user.registrationDate);
            var diffTime = Math.abs(today.getTime() - regDate.getTime());
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            userData['daysSinceRegistration'] = diffDays;
            
            // Add premium status
            if (user.subscriptionType == 'premium' || user.subscriptionType == 'Premium') {
                userData['isPremium'] = true;
            } else {
                userData['isPremium'] = false;
            }
            
            // Format phone number
            var phone = user.phoneNumber;
            if (phone != null && phone != undefined) {
                phone = phone.replace(/\D/g, '');
                if (phone.length == 10) {
                    userData['formattedPhone'] = '(' + phone.substring(0, 3) + ') ' + phone.substring(3, 6) + '-' + phone.substring(6);
                } else {
                    userData['formattedPhone'] = phone;
                }
            }
            
            result.push(userData);
        }
    }
    
    // Sort by name
    for (var i = 0; i < result.length; i++) {
        for (var j = i + 1; j < result.length; j++) {
            if (result[i].name > result[j].name) {
                var temp: any = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    
    return result;
}