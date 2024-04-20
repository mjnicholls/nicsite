import React from 'react';
import { Box } from '@mui/material';
import { MainText } from "../globalStyles";
import { Text } from "../About/Styles";
import { BoxPurple } from '../Approach/Styles';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Privacy = () => {

    const header = "My lawful basis for holding and using your personal information"

  return (

    <Box sx={{ pl: { sm: 12, xs: 3}, pr: { sm: 12, xs: 2}, pb: { sm: 4, xs: 2 }} }>

<Box sx={{ display: "flex", justifyContent: "center", pb: { sm: 4, xs: 2 }}} pt={4}>

        <Text 
        sx={{ fontSize: { sm: "30px", xs: "15px" } }}
        >
        Privacy Policy
        </Text>

</Box>

<Box sx={{ backgroundColor: "#daffd5", borderRadius: "15px" }} p={4} mb={4}>
<Text sx={{ fontSize: { sm: "19px", xs: "14px" } }} pb={2}>INTRODUCTION</Text>
<MainText pb={2} sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
Your privacy is very important to me and you can be confident that your personal information will be kept safe and secure and will only be used for the purpose it was given to me. I adhere to current data protection legislation, including the General Data Protection Regulation (EU/2016/679) (the GDPR), the Data Protection Act 2018 and the Privacy and Electronic Communications (EC Directive) Regulations 2003. 
</MainText>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
This privacy notice tells you what I will do with your personal information from initial point of contact through to after your therapy has ended, including: 
</MainText>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
    <ul>
    <li>Why I am able to process your information and what purpose I am processing it for</li> 
<li>Whether you have to provide it to me</li> 
<li>How long I store it for</li>  
<li>Whether there are other recipients of your personal information</li>  
<li>Whether I intend to transfer it to another country</li> 
<li>Whether I do automated decision-making or profiling</li> 
<li>Your data protection rights</li>  
    </ul>
</MainText>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
I am happy to chat through any questions you might have about my data protection policy and you can contact me via email at <a href="mailto:NicolaKirkCounselling@proton.me">nicolakirkcounselling@proton.me</a>
</MainText>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
‘Data controller’ is the term used to describe the person/ organisation that collects and stores and has responsibility for people’s personal data. In this instance, the data controller is me. 
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
I am registered with the Information Commissioner’s Office [Registration number <b>ZB680773</b>]. 
</MainText>

<hr style={{ width: { sm: "400px", xs: "20px" }, margin: "auto", marginTop: "40px" }} />

<Text sx={{fontSize: { sm: "19px", xs: "14px" } }} pt={4} pb={2}>MY CONTACT DETAILS</Text>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
  Name: Nicola Kirk
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
  Address: Operating from The Loft (5, Central Buildings, 72 Busby Rd, Clarkston, Glasgow G76 7AU)
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
  Web Address: www.nicolakirkcounselling.co.uk
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
  Phone Number: 07468 345451
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
  Date completed this version of privacy notice: 12/4/2024
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
  Email: nicolakirkcounselling@proton.me
</MainText>

<hr style={{ width: { sm: "400px", xs: "20px" }, margin: "auto", marginTop: "40px" }} />

<Text sx={{fontSize: { sm: "19px", xs: "14px" } }} pt={4} pb={2}>{header.toUpperCase()}</Text>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
  The GDPR states that I must have a lawful basis for processing your personal data. There are different lawful bases depending on the stage at which I am processing your data. I have explained these below:
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
  If you have had therapy with me and it has now ended, I will use legitimate interest as my lawful basis for holding and using your personal information.
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
  If you are currently having therapy or if you are in contact with me to consider therapy, I will process your personal data where it is necessary for the performance of our contract.
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
  The GDPR also makes sure that I look after any sensitive personal information that you may disclose to me appropriately. This type of information is called ‘special category personal information’. The lawful basis for me processing any special categories of personal information is that it is for provision of health treatment (in this case counselling) and necessary for a contract with a health professional (in this case, a contract between me and you).
</MainText>

<hr style={{ width: { sm: "400px", xs: "20px" }, margin: "auto", marginTop: "40px" }} />

<Text sx={{fontSize: { sm: "19px", xs: "14px" } }} pt={4}>HOW I USE YOUR INFORMATION</Text>
<Text pt={3} pb={2} sx={{ fontSize: { xs: "12px" } }}>I. INITIAL CONTACT</Text>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
When you contact me with an enquiry about my counselling services I will collect information to help me satisfy your enquiry. This will include things like your name, email address and phone number, as well as your reason for seeking counselling. Alternatively, your GP or other health professional may send me your details when making a referral or a parent or trusted individual may give me your details when making an enquiry on your behalf. 
</MainText>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
If you decide not to proceed, I will ensure all your personal data is deleted within one month of your enquiry. If you would like me to delete this information sooner, just let me know. 
</MainText>

<Text pt={4} pb={2} sx={{ fontSize: { xs: "12px" } }}>II. WHEN YOU ARE ACCESSING COUNSELLING</Text>
<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
Rest assured that everything you discuss with me is confidential. That confidentiality will only be broken in the following instances: if I believe there is a risk of <b>harm to yourself or others</b>. I reserve the right to break confidentiality if I think that you have become a danger to yourself or other people. I will attempt to discuss this with you and my supervisor first, but this may not always be possible. <b>For legal and ethical reasons</b> I am not bound by confidentiality if in good faith I feel that I can assist in the prevention or detection of a serious crime, this includes safeguarding issues regarding children or vulnerable adults, crimes regarding substantial financial gains and losses, and acts of terrorism.
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
  I will always try to speak to you about this first, unless there are safeguarding or legal issues that prevent this.
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
  I will keep a record of your personal details to help the counselling services run smoothly. These details are kept securely either in a locked filing cabinet or on an encrypted device, and are not shared with any third party.
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
  I will keep written notes of each session, these are kept on an encrypted device, or in a locked filing cabinet if it is a paper copy.
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
  For security reasons I do not retain text messages for more than one month. If there is relevant information contained in a text message I will make a note of it within your counselling records which are stored on an encrypted device. Likewise, any email correspondence will be deleted after one month if it is not important. If necessary I will make a note of it within your counselling records which are stored on an encrypted device.
</MainText>

<Text pt={4} pb={2} sx={{ fontSize: { xs: "12px" } }}>III. AFTER COUNSELLING HAS ENDED</Text>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
Once counselling has ended a record of our work together will be kept for seven years from the end of our contact with each other, and then securely destroyed. Please note that by law, for accounting and tax purposes, I must keep financial records for six years after the financial year ends.
</MainText>

<Text pt={4} pb={2} sx={{ fontSize: { xs: "12px" } }}>IV. THIRD-PARTY RECIPIENTS OF PERSONAL DATA</Text>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
I will not share your information with any third parties unless:
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
    <ul>
    <li>you have consented to this (for example to pass on your details to a third-party for their services)</li> 
<li>it is as part of my duty to protect a child, a vulnerable adult, yourself or the public</li> 
<li>I am are required to do so by any court or law or any relevant regulatory authority (e.g. with regards to terrorism, money laundering).</li>  
    </ul>
</MainText>

<hr style={{ width: { sm: "400px", xs: "20px" }, margin: "auto", marginTop: "40px" }} />

<Text sx={{fontSize: { sm: "19px", xs: "14px" } }} pt={4} pb={2}>YOUR RIGHTS</Text>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
I try to be as open as I can be in terms of giving people access to their personal information. You have a right to ask me to delete your personal information, to limit how I use your personal information, or to stop processing your personal information. You also have a right to ask for a copy of any information that I hold about you and to object to the use of your personal data in some circumstances. You can read more about your rights at <a href="https://www.ico.org.uk/your-data-matters" target='_blank' rel="noreferrer">ico.org.uk/your-data-matters</a>
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
If I do hold information about you I will: 
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
    <ul>
    <li>give you a description of it and where it came from; </li> 
<li>tell you why I am holding its, tell you how long I will store your data and how I made this decision; </li> 
<li> tell you who it could be disclosed to; </li>  
<li>let you have a copy of the information in an intelligible form.  </li>  
    </ul>
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
You can also ask me at any time to correct any mistakes there may be in the personal information I hold about you. 
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
To make a request for any personal information I may hold about you, please put the request in writing addressing it to <a href="mailto:NicolaKirkCounselling@proton.me">nicolakirkcounselling@proton.me</a>
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
If you have any complaint about how I handle your personal data please do not hesitate to get in touch with me by writing or emailing to the contact details given above. I would welcome any suggestions for improving my data protection procedures. 
</MainText>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
If you want to make a formal complaint about the way I have processed your personal information you can contact the ICO which is the statutory body that oversees data protection law in the UK. For more information go to <a href="https://www.ico.org.uk/make-a-complaint" target='_blank' rel="noreferrer">ico.org.uk/make-a-complaint</a>.
</MainText>

<hr style={{ width: { sm: "400px", xs: "20px" }, margin: "auto", marginTop: "40px" }} />

<Text sx={{fontSize: { sm: "19px", xs: "14px" } }} pt={4} pb={2}>DATA SECURITY</Text>

<MainText sx={{ fontSize: { xs: "12px", sm: "16px" } }} pb={2}>
I take the security of the data I hold about you very seriously and as such I take every effort to make sure it is kept secure. I use encrypted devices and store all sensitive paper documents in a locked filing cabinet. 
</MainText>

</Box>

    </Box>
  );
};

export default Privacy;
