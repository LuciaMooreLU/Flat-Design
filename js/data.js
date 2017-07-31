/*
 * @Author: iceStone
 * @Date:   2015-12-01 15:25:37
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-04 12:23:02
 */

'use strict';

var data = {
  "keepalive介绍":
  '<h3>· 简介</h3><br />'+
  ' <p> keepalived 是 Linux下一个轻量级的高可用解决方案</p><br />' +
    '<p>keepalived 主要通过虚拟路由冗余（VRRP）来实现高可用功能</p><br /><hr>' +
  '<ul><p>优点</p><br /><li>部署及使用简单，只需一个配置文件即可完成 </li><br /></ul>'+
  '<ul><p>功能</p><br /><li>服务器状态检测和故障隔离功能</li>HA（High Available） cluster   [高可用群集]<li></li></ul> <br />'+
    '<p>.........</p>' ,
  "VRRP工作原理": '<p>VRRP协议将两台或多台路由器设备虚拟成一个虚拟路由器，对外提供虚拟路由器IP(一个或多个)；</p><br />'+
      '<p>而在路由器组内部，如果实际拥有这个对外IP的路由器如果工作正常的话就是MASTER，或者是通过算法选举产生；</p><br />'+
      '<p>MASTER实现针对虚拟路由器IP的各种网络功能，如ARP请求，ICMP，以及数据的转发等；</p>'+
      '<p>其他设备不拥有该IP，状态是BACKUP，除了接收MASTER的VRRP状态通告信息外，不执行对外的网络功能。</p><br />'+
      '<p>当主机失效时，BACKUP将接管原先MASTER的网络功能。</p><br />'+
      '<p>❀ 如何判定多个路由器在同一组虚拟路由器中？</p><br />'+
      '<p>VRID：每个虚拟路由器都有一个唯一标识（VRID是一个0～255的正整数</p><br />'+
        '<p>配置VRRP协议时需要配置每个路由器的虚拟路由器ID(VRID)和优先权值;</p><br />'+
    '<p>使用VRID将路由器进行分组，具有相同VRID值的路由器为同一个组</p><br />'+ '<p>.........</p>'
    ,
  "VRRP图解": '<img src="http://oh4uobiuk.bkt.clouddn.com/vrrp.png" style="width: 100%">'+
      '<br />'+
    '<p>左侧图片为局域网组网；右侧图片为VRRP组网</p>'+
  '<p>.........</p>'


};
