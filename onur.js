const newData =[
    {
        firstName: 'Onur',
        lastName: 'Kanca',
        email: 'onur.kanca@portalgrup.com',
        phoneNumber: '4444444444'
    },
    {
        firstName: 'Uğur',
        lastName: 'Mamak',
        email: 'ugur.mamak@portalgrup.com',
        phoneNumber: '5555555555'
    },
    {
        firstName: 'Tunay',
        lastName: 'Çelik',
        email: 'tunay.celik@portalgrup.com',
        phoneNumber: '1111111111'
    },
    {
        firstName: 'Ömer',
        lastName: 'Şanver',
        email: 'omer.sanver@portalgrup.com',
        phoneNumber: '2222222222'
    },
    {
        firstName: 'Osman',
        lastName: 'Aydur',
        email: 'osman.aydur@portalgrup.com',
        phoneNumber: '3333333333'
    },
];

new Vue({
    el: '#primary-section',
    data: {
        myData : newData,
        fName : '',
        lName: '',
        mail: '',
        pNumber: '',
        isUpdatedClicked: false,
        clickedIndex: 0
    },
    methods: {
        addItem () {
            if(this.fName.trim() === '' || this.lName.trim() === '' || this.mail.trim() === '' || this.pNumber.trim() === '') return;
            if(this.isUpdatedClicked){
                this.myData[this.clickedIndex].firstName = this.fName;
                this.myData[this.clickedIndex].lastName = this.lName;
                this.myData[this.clickedIndex].email = this.mail;
                this.myData[this.clickedIndex].phoneNumber = this.pNumber;
                this.fName = this.lName = this.mail = this.pNumber = '';
                this.isUpdatedClicked = false;
            } else {
                this.myData.push({'firstName': this.fName,'lastName': this.lName, 'email' : this.mail, 'phoneNumber' : this.pNumber});
                
            }
        },
        updatedItem(item,index){
            this.isUpdatedClicked = true;
            this.fName = item.firstName;
            this.lName = item.lastName;
            this.mail = item.email;
            this.pNumber = item.phoneNumber;
            this.clickedIndex = index;
            console.log(this.fName)
        }
    }
});