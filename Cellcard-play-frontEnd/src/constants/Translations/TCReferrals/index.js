/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Friday, 02nd October 2020 07:52 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

/* eslint-disable no-template-curly-in-string */
const en =
  'Enjoy extra benefits when you invite your friends to buy Unlimited Play plan using your referral code! Each successful referral gives the following extras:<br/><BULLET/>For you: ${coinsSelf} <br/><BULLET/>For your friend: ${coinsFriend} <br/>Offer available until ${dateExpire}<br/><br/>Terms & Conditions<br/>1. Your referral code is valid for X months after request.<br/>2. Your friend must be a new user who have never purchased or used Unlimited Play plan before to participate in this promotion.<br/>3. You can send your referral code via Email, SMS, WhatsApp, Facebook Messenger or any other means of communication.<br/>4. You and your friend get your bonus Play Coins only when your friend uses your referral code to purchase any Unlimited Play plan for the first time.<br/>5. Play Coins will be deposited automatically into your account and your friend’s account after your friend buys an Unlimited Play plan using your referral code.<br/>6. Cellcard reserves the right to update terms and conditions without prior notice.';
const km =
  'រីករាយជាមួយអត្ថប្រយោជន៍បន្ថែម នៅពេលអ្នកអញ្ជើញមិត្តភក្តិរបស់អ្នកភ្ជាប់គម្រោង Unlimited Play ដោយប្រើ referral code របស់អ្នក!<br/>រាល់ការណែនាំឲ្យភ្ជាប់ដោយជោគជ័យ អ្នកឬមិត្តភក្តិរបស់អ្នកនឹងទទួលបាននូវការផ្តល់ជូនបន្ថែមដូចជា៖<br/><BULLET/>សម្រាប់អ្នក: ${coinsSelf} <br/><BULLET/>សម្រាប់មិត្តភក្តិរបស់អ្នក: ${coinsFriend} <br/>ការផ្តល់ជូននេះ មានសុពលភាពរហូតដល់ថ្ងៃទី ${dateExpire}<br/><br/>លក្ខខណ្ឌផ្សេងៗ៖<br/>1. Referral code របស់អ្នក មានសុពលភាពត្រឹមតែ X ខែប៉ុណ្ណោះ បន្ទាប់ពីការស្នើសុំ។<br/>2. មិត្តភក្តិរបស់អ្នក ត្រូវតែជាអតិថិជនថ្មី ដែលមិនធ្លាប់ភ្ជាប់គម្រោង Unlimited Play ដើម្បីទទួលបានការផ្តល់ជូនពិសេសនេះ។<br/>3. អ្នកអាចផ្ញើ Referral code របស់អ្នកតាមអ៊ីម៊ែល ការផ្ញើសារ WhatsApp Facebook Messenger ឬតាម មធ្យោបាយទំនាក់ទំនងផ្សេងទៀតក៏បានផងដែរ។<br/>4. អ្នកនិងមិត្តភក្តិរបស់អ្នក នឹងទទួលបាន Play Coins បន្ថែម នៅពេលណាដែលមិត្តភក្តិរបស់អ្នកប្រើ Referral code របស់អ្នក ដើម្បីប្រើគម្រោង Unlimited Play លើកដំបូងប៉ុណ្ណោះ។<br/>5. Play Coins នឹងត្រូវដាក់បញ្ចូលទៅក្នុង គណនីរបស់អ្នកនិងមិត្តភក្តិរបស់អ្នក ដោយស្វ័យប្រវត្តិបន្ទាប់ពីមិត្តភក្តិរបស់អ្នកភ្ជាប់គម្រោង Unlimited Play ដោយប្រើប្រាស់ Referral code របស់អ្នករួច។<br/>6. សែលកាតរក្សាសិទ្ធិក្នុងការកែប្រែលក្ខខណ្ឌទាំងអស់នេះ ដោយពុំចាំបាច់ជម្រាបជូនជាមុន។';
const zh =
  '当您邀请您的朋友使用您的推荐代码购买Unlimited Play计划时，您可以享受额外的的好处！每次成功推荐都会带来以下额外好处：<br/><BULLET/>为您：${coinsSelf}<br/><BULLET/>给您的朋友：${coinsFriend}<br/><br/>此优惠有效期至${dateExpire}<br/><br/>条款及细则<br/>1.您的推荐代码在请求后的X个月内有效。<br/>2.您的朋友必须是从未参与过此促销活动之前从未购买或使用过Unlimited Play计划的新用户。<br/>3.您可以通过电子邮件，SMS，WhatsApp，Facebook Messenger或任何其他通信方式发送推荐代码。<br/>4.仅当您的朋友第一次使用您的推荐码购买Unlimited Play计划时，您和您的朋友才能获得红利Play Coins。<br/>5.在您的朋友使用您的推荐代码购买了Unlimited Play计划后，Play Coins将自动存入您的帐户和您朋友的帐户中。<br/>6. Cellcard保留更新条款和条件的权利，恕不另行通知。';

export default {
  en,
  km,
  zh,
};
