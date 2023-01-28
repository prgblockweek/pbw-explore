<script>
    import TimelineItem from "$lib/TimelineItem.svelte";
</script>

<div class="w-full min-h-screen  text-pbw-white text-xl">    
    <div class="p-2 overflow-x-auto overflow-y-scroll">
        <div class="grid grid-cols-10 gap-1 mb-1 bg-white sticky top-0 inset-0 z-20 min-w-[800px]">
            <div class="bg-slate-400 text-slate-200 text-center p-1 text-md">2.6.</div>
            <div class="bg-slate-400 text-slate-200 text-center p-1 text-md">3.6.</div>
            <div class="bg-slate-400 text-slate-200 text-center p-1 text-md">4.6.</div>
            <div class="bg-slate-400 text-slate-200 text-center p-1 text-md">5.6.</div>
            <div class="bg-slate-400 text-slate-200 text-center p-1 text-md">6.6.</div>
            <div class="bg-slate-400 text-slate-200 text-center p-1 text-md">7.6.</div>
            <div class="bg-slate-400 text-slate-200 text-center p-1 text-md">8.6.</div>
            <div class="bg-slate-400 text-slate-200 text-center p-1 text-md">9.6.</div>
            <div class="bg-slate-400 text-slate-200 text-center p-1 text-md">10.6.</div>
            <div class="bg-slate-400 text-slate-200 text-center p-1 text-md">11.6.</div>
        </div>
        <div class="grid grid-cols-10 gap-1 min-w-[800px]">
            
            <TimelineItem big name="UTXO" img="https://data.prgblockweek.com/23/assets/events/utxo/logo.jpg" start="1" colspan="3"/>
            <TimelineItem medium name="PrivacyETH" img="https://data.prgblockweek.com/23/assets/events/privacyeth/logo.jpg" start="4" colspan="1"/>
            <TimelineItem big name="Prague DeFi Summit" img="https://data.prgblockweek.com/23/assets/events/praguedefi/logo.jpg" start="5" colspan="3"/>
            <TimelineItem big name="ETHPrague" img="https://data.prgblockweek.com/23/assets/events/ethprague/logo.jpg" start="8" colspan="3"/>
            <TimelineItem name="Apus Finance" img="" start="1" colspan="1"/>
            <TimelineItem big name="Gateway to Cosmos" img="https://data.prgblockweek.com/23/assets/events/gateway/logo.jpg" start="2" colspan="3"/>
            <TimelineItem medium name="IBCPrague" img="https://data.prgblockweek.com/23/assets/events/ibcprague/logo.jpg" start="5" colspan="1"/>
            <TimelineItem medium name="Bitcoin Mining" img="https://data.prgblockweek.com/23/assets/events/btc-mining/logo.jpg" start="6" colspan="1"/>
            <TimelineItem big name="BTC Prague" img="https://data.prgblockweek.com/23/assets/events/btcprague/logo.jpg" start="7" colspan="3"/>
            <TimelineItem medium name="Dotsama" start="4" colspan="2"/>
            <TimelineItem name="STRV" start="6" />
            <TimelineItem name="Škodaverse" start="4" />
            
        </div>
    </div>
    <div class="h-[1000px] bg-sky-600">
        content below
    </div>
</div>