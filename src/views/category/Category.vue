<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <li>换行1</li>
      <li>换行2</li>
      <li>换行3</li>
      <li>换行4</li>
      <li>换行5</li>
      <li>换行6</li>
      <li>换行7</li>
      <li>换行8</li>
      <li>换行9</li>
      <li>换行10</li>
      <li>换行11</li>
      <li>换行12</li>
      <li>换行13</li>
      <li>换行14</li>
      <li>换行15</li>
      <li>换行16</li>
      <li>换行17</li>
      <li>换行18</li>
      <li>换行19</li>
      <li>换行20</li>
      <li>换行21</li>
      <li>换行22</li>
      <li>换行23</li>
      <li>换行24</li>
      <li>换行25</li>
      <li>换行26</li>
      <li>换行27</li>
      <li>换行28</li>
      <li>换行29</li>
      <li>换行30</li>
      <li>换行31</li>
      <li>换行32</li>
      <li>换行33</li>
      <li>换行34</li>
      <li>换行35</li>
      <li>换行36</li>
      <li>换行37</li>
      <li>换行38</li>
      <li>换行39</li>
      <li>换行40</li>
      <li>换行41</li>
      <li>换行42</li>
      <li>换行43</li>
      <li>换行44</li>
      <li>换行45</li>
      <li>换行46</li>
      <li>换行47</li>
      <li>换行48</li>
      <li>换行49</li>
      <li>换行50</li>
      <li>换行51</li>
      <li>换行52</li>
      <li>换行53</li>
      <li>换行54</li>
      <li>换行55</li>
      <li>换行56</li>
      <li>换行57</li>
      <li>换行58</li>
      <li>换行59</li>
      <li>换行60</li>
      <li>换行61</li>
      <li>换行62</li>
      <li>换行63</li>
      <li>换行64</li>
      <li>换行65</li>
      <li>换行66</li>
      <li>换行67</li>
      <li>换行68</li>
      <li>换行69</li>
      <li>换行70</li>
      <li>换行71</li>
      <li>换行72</li>
      <li>换行73</li>
      <li>换行74</li>
      <li>换行75</li>
      <li>换行76</li>
      <li>换行77</li>
      <li>换行78</li>
      <li>换行79</li>
      <li>换行80</li>
      <li>换行81</li>
      <li>换行82</li>
      <li>换行83</li>
      <li>换行84</li>
      <li>换行85</li>
      <li>换行86</li>
      <li>换行87</li>
      <li>换行88</li>
      <li>换行89</li>
      <li>换行90</li>
      <li>换行91</li>
      <li>换行92</li>
      <li>换行93</li>
      <li>换行94</li>
      <li>换行95</li>
      <li>换行96</li>
      <li>换行97</li>
      <li>换行98</li>
      <li>换行99</li>
      <li>换行100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Category",
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector('.wrapper'), {})
  }
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  background: #589;
  overflow: hidden;
}
</style>
