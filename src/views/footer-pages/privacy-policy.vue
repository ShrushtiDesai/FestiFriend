<script setup>
import { Shield, Info, Database, FileText, Lock, Link, Users, FileEdit, Mail } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-[#f6fff8] py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-[1200px] mx-auto bg-[#f6f4ec] rounded-xl shadow-lg overflow-hidden">
      <!-- Header -->
      <div class="bg-violet-100 p-6 sm:p-8">
        <div class="flex items-center gap-3 mb-6">
          <Shield class="h-6 w-6 text-primary" />
          <h1 class="text-2xl sm:text-3xl font-bold text-primary">Privacy Policy</h1>
        </div>
        <div class="space-y-2">
          <p class="text-muted-foreground">Privacy Policy for FestiFriend</p>
          <p class="text-sm text-muted-foreground">Effective date: 05/15/24</p>
        </div>
      </div>

      <!-- Content -->
      <div class="bg-gradient-to-t from-red-100 to-violet-50 p-6 sm:p-8 space-y-8">
        <!-- Introduction -->
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Info class="h-5 w-5 text-primary" />
            Introduction
          </h2>
          <div class="space-y-4 text-muted-foreground">
            <p>
              At FestiFriend, accessible from the apple app store, one of our main priorities is the privacy of our users. 
              This Privacy Policy document outlines the types of information that is not collected by FestiFriend and how we use it.
            </p>
          </div>
        </section>

        <!-- Information Collection -->
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Database class="h-5 w-5 text-primary" />
            Information Collection and Use
          </h2>
          <div class="space-y-4 text-muted-foreground">
            <p>
              For a better experience while using our app, we may require you to provide us with certain personally identifiable information. 
              The information that we request will be retained by us and used as described in this privacy policy.
            </p>
            <p>
              FestiFriend does not collect any personal data from its users. All functionalities and data remain within the device 
              and are not transmitted to any servers or other external entities. Our app functions offline, and no information is 
              needed or collected to provide our services.
            </p>
          </div>
        </section>

        <!-- Log Data -->
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText class="h-5 w-5 text-primary" />
            Log Data
          </h2>
          <div class="space-y-4 text-muted-foreground">
            <p>
              We want to inform you that whenever you use our service, in a case of an error in the app we collect data and 
              information (through third-party products) on your phone called Log Data. This Log Data may include information 
              such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration 
              of the app when utilizing our service, the time and date of your use of the service, and other statistics.
            </p>
            <p>
              However, FestiFriend does not store or share this log data. It is used solely for enhancing app functionality 
              and addressing issues.
            </p>
          </div>
        </section>

        <!-- Security -->
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Lock class="h-5 w-5 text-primary" />
            Security
          </h2>
          <div class="space-y-4 text-muted-foreground">
            <p>
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable 
              means of protecting it. But remember that no method of transmission over the internet, or method of electronic 
              storage is 100% secure and reliable, and we cannot guarantee its absolute security as we do not collect or store 
              any personal data.
            </p>
          </div>
        </section>

        <!-- Links -->
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Link class="h-5 w-5 text-primary" />
            Links to Other Sites
          </h2>
          <div class="space-y-4 text-muted-foreground">
            <p>Our app does not contain any links to other websites.</p>
          </div>
        </section>

        <!-- Children's Privacy -->
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Users class="h-5 w-5 text-primary" />
            Children's Privacy
          </h2>
          <div class="space-y-4 text-muted-foreground">
            <p>
              Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable 
              information from children under 13.
            </p>
          </div>
        </section>

        <!-- Changes -->
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileEdit class="h-5 w-5 text-primary" />
            Changes to This Privacy Policy
          </h2>
          <div class="space-y-4 text-muted-foreground">
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for 
              any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes 
              are effective immediately after they are posted on this page.
            </p>
          </div>
        </section>

        <!-- Contact -->
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Mail class="h-5 w-5 text-primary" />
            Contact Us
          </h2>
          <div class="space-y-4 text-muted-foreground">
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us by emailing 
              <a href="mailto:noah@festifriend.com" class="text-primary hover:underline">noah@festifriend.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz@0,14..32;1,14..32&family=Roboto:wght@400;500;700&display=swap');

  * {
    font-family: "Inter", sans-serif;
  }
</style>