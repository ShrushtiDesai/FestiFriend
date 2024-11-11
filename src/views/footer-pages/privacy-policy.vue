<script setup lang="ts">
const effectiveDate = '05/15/24'
</script>

<template>
  <div class="privacy-policy">
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <h1 class="text-4xl font-bold mb-8">FestiFriend Privacy Policy</h1>
      
      <div class="text-gray-700 space-y-6">
        <p class="text-lg"><strong>Effective date:</strong> {{ effectiveDate }}</p>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 mt-8">Introduction</h2>
          <p>At FestiFriend, accessible from the apple app store, one of our main priorities is the privacy of our users. This Privacy Policy document outlines the types of information that is not collected by FestiFriend and how we use it.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 mt-8">Information Collection and Use</h2>
          <p>For a better experience while using our app, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.</p>
          <p>FestiFriend does not collect any personal data from its users. All functionalities and data remain within the device and are not transmitted to any servers or other external entities. Our app functions offline, and no information is needed or collected to provide our services.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 mt-8">Log Data</h2>
          <p>We want to inform you that whenever you use our service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our service, the time and date of your use of the service, and other statistics. However, FestiFriend does not store or share this log data. It is used solely for enhancing app functionality and addressing issues.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 mt-8">Security</h2>
          <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security as we do not collect or store any personal data.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 mt-8">Links to Other Sites</h2>
          <p>Our app does not contain any links to other websites.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 mt-8">Children's Privacy</h2>
          <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 mt-8">Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 mt-8">Contact Us</h2>
          <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us by emailing <a href="mailto:help@festifriend.com" class="text-blue-600 hover:text-blue-800">noah@festifriend.com</a>.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz@0,14..32;1,14..32&family=Roboto:wght@400;500;700&display=swap');

.privacy-policy {
  background-color: #fefef4;
  min-height: calc(100vh - 150px);
  padding-top: 30px;
  font-family: "Inter",sans-serif;
  
}

@media (max-width: 768px) {
  .privacy-policy {
    padding-top: 150px;
  }
}
</style>