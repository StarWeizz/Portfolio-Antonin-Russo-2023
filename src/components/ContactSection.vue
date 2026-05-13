<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const { t } = useI18n()

const form = ref({ firstname: '', lastname: '', email: '', subject: 'alternance', message: '' })
const status = ref(null)

async function sendMessage() {
  status.value = 'sending'
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_firstname: form.value.firstname,
        from_lastname:  form.value.lastname,
        from_email:     form.value.email,
        subject:        form.value.subject,
        message:        form.value.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    status.value = 'success'
    form.value = { firstname: '', lastname: '', email: '', subject: 'alternance', message: '' }
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="contact" class="border-t border-[#e3e3e3] px-8 md:px-14 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-screen-xl mx-auto">

    <div>
      <div class="font-syne text-[11px] font-bold tracking-[2.5px] uppercase text-[#F4500A] mb-3">{{ t('contact.label') }}</div>
      <div class="font-syne font-extrabold text-[42px] tracking-[-1.5px] text-[#0e0e0e] leading-none mb-5">
        {{ t('contact.title') }} <em class="not-italic font-bold text-[#bbb]">{{ t('contact.title_em') }}</em>
      </div>
      <p class="font-figtree text-[15px] text-[#888] leading-[1.8] max-w-[360px] mb-8">{{ t('contact.tagline') }}</p>

      <div class="flex flex-col gap-3">
        <a v-for="link in [
             { icon: '✉️', label: 'Email', value: 'contact@antonin-russo.fr', href: 'mailto:contact@antonin-russo.fr' },
             { icon: '💼', label: 'LinkedIn', value: 'Antonin Russo', href: 'https://linkedin.com/in/antonin-russo-33096626b' },
             { icon: '🐙', label: 'GitHub', value: 'StarWeizz', href: 'https://github.com/StarWeizz' },
           ]" :key="link.label" :href="link.href" target="_blank"
           class="flex items-center gap-3 px-4 py-[13px] border border-[#e3e3e3] rounded-[10px] no-underline transition-all duration-200 hover:border-[#F4500A] hover:bg-[#fff8f5] hover:translate-x-1 group">
          <div class="w-8 h-8 rounded-lg bg-[#f4f4f4] flex items-center justify-center text-base flex-shrink-0 transition-colors group-hover:bg-[#ffe8dc]">{{ link.icon }}</div>
          <div class="flex-1">
            <div class="font-figtree text-[10px] font-semibold text-[#bbb] tracking-[0.4px] uppercase">{{ link.label }}</div>
            <div class="font-syne text-[13px] font-bold text-[#0e0e0e]">{{ link.value }}</div>
          </div>
          <svg class="text-[#ccc] transition-all group-hover:text-[#F4500A] group-hover:translate-x-[3px]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>

    <form @submit.prevent="sendMessage" class="flex flex-col gap-3.5">
      <div class="grid grid-cols-2 gap-3.5">
        <div class="flex flex-col gap-[5px]">
          <label class="font-syne text-[10px] font-bold tracking-[0.5px] uppercase text-[#aaa]">{{ t('contact.form_firstname') }}</label>
          <input v-model="form.firstname" type="text" required class="font-figtree text-[13px] text-[#0e0e0e] bg-white border-[1.5px] border-[#e3e3e3] rounded-lg px-3.5 py-2.5 outline-none focus:border-[#F4500A] transition-colors" />
        </div>
        <div class="flex flex-col gap-[5px]">
          <label class="font-syne text-[10px] font-bold tracking-[0.5px] uppercase text-[#aaa]">{{ t('contact.form_lastname') }}</label>
          <input v-model="form.lastname" type="text" required class="font-figtree text-[13px] text-[#0e0e0e] bg-white border-[1.5px] border-[#e3e3e3] rounded-lg px-3.5 py-2.5 outline-none focus:border-[#F4500A] transition-colors" />
        </div>
      </div>
      <div class="flex flex-col gap-[5px]">
        <label class="font-syne text-[10px] font-bold tracking-[0.5px] uppercase text-[#aaa]">{{ t('contact.form_email') }}</label>
        <input v-model="form.email" type="email" required class="font-figtree text-[13px] text-[#0e0e0e] bg-white border-[1.5px] border-[#e3e3e3] rounded-lg px-3.5 py-2.5 outline-none focus:border-[#F4500A] transition-colors" />
      </div>
      <div class="flex flex-col gap-[5px]">
        <label class="font-syne text-[10px] font-bold tracking-[0.5px] uppercase text-[#aaa]">{{ t('contact.form_subject') }}</label>
        <select v-model="form.subject" class="font-figtree text-[13px] text-[#0e0e0e] bg-white border-[1.5px] border-[#e3e3e3] rounded-lg px-3.5 py-2.5 outline-none focus:border-[#F4500A] transition-colors">
          <option value="alternance">{{ t('contact.form_subject_alternance') }}</option>
          <option value="freelance">{{ t('contact.form_subject_freelance') }}</option>
          <option value="question">{{ t('contact.form_subject_question') }}</option>
          <option value="other">{{ t('contact.form_subject_other') }}</option>
        </select>
      </div>
      <div class="flex flex-col gap-[5px]">
        <label class="font-syne text-[10px] font-bold tracking-[0.5px] uppercase text-[#aaa]">{{ t('contact.form_message') }}</label>
        <textarea v-model="form.message" required :placeholder="t('contact.form_placeholder_message')" class="font-figtree text-[13px] text-[#0e0e0e] bg-white border-[1.5px] border-[#e3e3e3] rounded-lg px-3.5 py-2.5 outline-none focus:border-[#F4500A] transition-colors resize-none min-h-[90px]" />
      </div>

      <p v-if="status === 'success'" class="font-figtree text-[12px] text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">{{ t('contact.form_success') }}</p>
      <p v-if="status === 'error'" class="font-figtree text-[12px] text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{{ t('contact.form_error') }}</p>

      <button type="submit" :disabled="status === 'sending'"
              class="btn-ripple font-syne text-[12px] font-bold tracking-[0.4px] bg-[#0e0e0e] text-white border-none rounded-lg px-6 py-[13px] flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
        <div class="ripple-bg" />
        <span>{{ status === 'sending' ? '...' : t('contact.form_submit') }}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </form>

  </section>
</template>
