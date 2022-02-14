var appConfig = {
    //  change the your AccountSid
    accountSid: "ACfd4a204f779532d9a78459ecc2bc0299",
    // change to your Flex Flow SID
    flexFlowSid: "FO7428c14391520d516712e4772a83bccd",
    colorTheme: {
        overrides: brandedColors
    },
    startEngagementOnInit: false,
    preEngagementConfig: {
        description: "Data privacy",
        fields: [
            {
                label: `In the course of our chat with you, you may choose to disclose sensitive personal data to us. We treat anything you tell us with the utmost confidentiality in accordance with our privacy policy, but we do need your consent to process it.

                By that, we mean send it through our website in chat messages and keep a secure record of the chat, so that we know what information and support we gave you. Without your consent, we cannot start a chat with you.

                Once a conversation has begun you'll receive responses by highly trained, professional support workers. You will be listened to, believed and offered help and support. You will not be judged or blamed and you don't have to take any further action if you don't feel ready to.

                This is a safe and confidential space for you to talk, however, there may be instances when we may need to breach confidentiality. These are in circumstances when we feel there may be a significant danger to children or yourself and referrals would be made to the most appropriate agencies.

                If you are in immediate danger please contact the police on 999 or 101.

                Please select 'I agree' to say you give consent for us to process your data in accordance with this policy.
`,
                type: "SelectItem",
                attributes: {
                    name: "privacy",
                    required: true
                },
                options: [
                    {
                        value: "yes",
                        label: "I agree",
                        selected: false
                    },
                ]
            }
        ],
        submitLabel: "Start chat"
    },
}