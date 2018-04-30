<template>
    <div class='container'>
    <br/>
    <br/>
        <timeline>
          <timeline-title>Histórico Profissional</timeline-title>
           <timeline-item color='green'>Donuz fidelização de clientes
            <small>Full Stack Developer</small>
           </timeline-item>
           <timeline-item color='yellow'>Donuz Fidelização de Clientes
            <small>Intern Full Stack Developer</small>
           </timeline-item>
           <timeline-item color='red'>4yousee Digital Signage
             <small>Intern Full Stack Developer</small>
           </timeline-item>
           <timeline-item color='red'>Ministério Público de MG
             <small>Intern</small>
           </timeline-item>
           <timeline-item color='red'>JGA Contabilidade
             <small>Aux Escritório</small>
           </timeline-item>
           <timeline-item color='red'>Prefeitura Municipal de Florestal
             <small>Intern IT Support</small>
           </timeline-item>

        </timeline>
        <br/><br/>
      </div>
</template>

<script>
  import {
    Timeline,
    TimelineItem,
    TimelineTitle,
  } from 'vue-cute-timeline';

  export default {
    name: 'Career',
    components: {
      Timeline,
      TimelineItem,
      TimelineTitle,
    },
  };
</script>

