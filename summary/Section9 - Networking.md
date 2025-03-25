# 🍨 Section9 - Networking

## Prerequisite -Switching Routing


`ip link` 명령어를 실행하면 스위치에 연결하기 위해 사용하려는 Eth0라는 이름을 가진 인터페이스가 보임.


192.168.1.0 이라는 주소를 가진 네트워크라고 가정. 같은 네트워크에 IP 주소를 가진 시스템을 할당. `ip addr` 명령어를 사용.


link가 올라오고 IP 주소가 할당되면 컴퓨터는 스위치를 통해 다른 호스트와 통신할 수 있음.


스위치는 네트워크 내의 통신만 가능하게 하므로 네트워크에서 호스트로부터 패킷을 받을 수 있고 같은 네트워크 내 다른 시스템에 보낼 수 있음.


192.168.2.0에 시스템 C와 D를 포함하는 또 다른 네트워크가 있다고 가정. 시스템은 192.168.2.10과 192.168.2.11을 각각 가짐.


192.168.1.11을 가진 시스템 B에 다른 네트워크의 192.168.2.10을 가진 시스템 C가 도달하려면? 라우터가 있어야 함.


라우터는 두 네트워크 연결시키도록 함.


많은 네트워크 포트를 가진 또 다른 서버가 있다고 가정. 두 개의 개별 네트워크에 연결되기 때문에 각 네트워크에 각각 두 개의 IP가 할당됨.


첫 번째 네트워크는 192.168.1.1을 할당. 두 번째는 192.168.2.1을 할당. 이제 두 네트워크가 통신이 가능하도록 연결된 라우터가 있음.


시스템 B가 시스템 C로 패킷을 보내려고 할 때, 패킷을 전송하기 위해 라우터가 네트워크에서 어디에 있는지 어떻게 알 수 있는가? 라우터는 네트워크의 또 다른 장치임. 이와 같은 많은 기기가 있을 것. gateway나 route를 가지고 시스템을 구성.


네트워크가 방이라면 게이트웨이는 다른 네트워크나 인터넷으로 가는 외부 세게로 통하는 문.


시스템은 통과하려면 문이 어디에 있는지 알아야 함. 시스템에 존재하는 라우팅 구성을 보려면 `route` 명령어를 실행. 커널의 라우팅 테이블이 보임. 현재는 라우팅 구성이 없음. 따라서 시스템 B가 시스템 C에 도달할 수 없음.


시스템 B에 게이트웨이를 구성하기 위해 `ip route add`  명령어를 실행. 그리고 192.168.1.1  게이트웨이를 통해 192.168.2.0에 도달할 수 있도록 명시. `route` 명령어를 다시 실행하면 추가된 경로가 보임.  → 모든 시스템에서 구성해야 함.


이러한 시스템에 인터넷 액세스가 필요하다고 가정. 172.217.194.0 구글에 접근하려고 함. 인터넷에 라우터를 연결하고 라우팅 테이블에 새 경로 추가.


인터넷에는 다양한 네트워크에 수많은 다양한 사이트가 있음. 동일한 라우터 IP 주소를 라우팅 테이블에 추가하는 대신 경로를 모르는 네트워크에 대해 이 라우터를 기본  게이트웨이로 사용하라고 간단히 말할 수 있음. 이렇게 하면 기존 네트워크 외부의 모든 네트워크에 대한 요청이 이 특정 라우터로 전달됨. 따라서 이와 같은 간단할 설정에서는 라우터의 IP 주소에 기본 게이트웨이가 설정된 단일 라우팅 테이블 항목만 있으면 됨. default대신 0.0.0.0이라고도 함. 모든 IP 도착지.


게이트웨이 필드에 0.0.0.0이 항목이 있으면 게이트웨이가 필요하지 않다는 것을 나타냄. 예를 들어, 시스템 C가 192.168.2.0 네트워크의 장치에 액세스하려면 자체 네트워크에 있기 때문에 게이트웨이가 필요하지 않음. 그러나 여러 라우터가 있다고 가정. 하나는 인터넷을 위한 것이고, 다른 하나는 내부 사설망을 위한 것. 각 네트워크마다 두 개의 개별 항목이 있어야 함. 내부 사설 네트워크를 위한 하나의 항목과 공용 네트워크를 포함한 모든 다른 네트워크를 위한 기본 게이트웨이가 있는 다른 항목. 따라서, 시스템에서 인터넷에 연결하는 데 문제가 있는 경우 이 라우팅 테이블과 기본 게이트웨이 구성을 시작하는 것이 좋음.

> 리눅스 호스트를 라우터로 설정하는 방법

A, B, C 호스트가 있음. A와 B는 192.168.1.0에 연결됨. B와 C는 192.168.2.0에 연결됨. B는 eth0과 eth1 두 인터페이스를  사용하여 두 네트워크에 연결됨.


A는 192.168.1.5를 가지고 C는 192.168.2.5를 가짐. B는 192.168.1.6과 192.168.2.6 네트워크를 가짐.


A에서 C로 도달하려면 어떻게 해야 하는가? A에서 192.168.2.5로 ping을 보내면 도달하지 않음. → A에게 네트워크 2의 게이트웨이가 B를 통해 열려 있음을 알려야 함. 그리고 라우팅 테이블에  추가. 게이트웨이 192.168.1.6d에 대해 192.168.2.0 네트워크를 연결하도록 경로 추가. 패킷이 C로 전달되려면 호스트 C가 호스트 A에게 응답을 보내야 함.


C는 192.168.1.0 네트워크의 A에 도달하려고 할 때 같은 문제를 직면함. C는 라우터 역할을 하는 B를 통해 A로 도달할 수 있음을 알아야 함. 그러므로 C 라우팅 테이블에도 넣음. ping을 보내면 더 이상 도달할 수 없다는 에러 메시지가 발생하지 않음.


그러나 여전히 응답이 돌아오지 않음. 기본적으로 리눅스에서 패킷은 한 인터페이스에서 다음 인터페이스로 전달되지 않음. 예를 들어, B의 eth0에서 받은 패킷은 eth1을 통해 다른 곳은 나가지 않음. 보안 이유때문.


예를 들어, 사설망에 연결된 eth0과 퍼블릭망에 eth1이 있다면 명시적으로 허용하지 않는  한 퍼블릭에서 프라이빗으로 쉽게 메시지를 보내고 않기를 원함. 그러나 이경우 둘다 사설망을 알고 있고 안전하므로 한 네트워크에서 다른 네트워크로 패킷을 보내도록 B가 허락할 수 있음.


인터페이스 간의 패킷 전송 여부는 이 시스템에서 /proc/sys/net/ipv4/ip_forward 파일의 설정에 의해 결정됨. 기본적으로 이 파일의 값은 0으로 설정되어있음. 전송이 되지 않음을 의미. 1로 설정하면 ping이 전달되는 것을 알 수 있음. 단순히 이 값을 설정하는 것만으로는 재부팅 시 변경 사항이 지속되지 않음. → etc/sys/control.conf에 net.ipv4.ip_forward = 1로 수정해야 함.

> 주요 명령어

`ip link` 는 호스트에서 수정된 인터페이스를 나열.


`ip addr` 은 그 인터페이스에 할당된 IP 주소를 확인.


`ip addr add` 는 인터페이스의 IP 주소를 설정하는 데 사용됨.


이러한 명령어를 사용하여 수정하면 재시작때까지만 유효함. 


변경을 유지하려면 /etc/network/interfaces에 설정해야 함.


`ip route` 나 `route` 는 라우팅 테이블을 보기 위해 사용됨.


`ip route add` 는 라우팅 테이블에 추가하는 데 사용됨.


라우터로 구성된 호스트와 함께 작업하는 경우 호스트에서 ip 포워딩이 활성화되어 있는지 확인.


## Prerequisite - DNS


같은 네트워크에 있는 A와 B라는 두 컴퓨터가 있음. 192.168.1.10과 192.168.1.11이라는 IP 주소를 가짐.


다른 컴퓨터의 IP 주소를 사용하여 한 컴퓨터에 다른 컴퓨터로 ping할 수 있음.


B가 데이터베이스 서비스를 가지고 있음. B의 IP 주소를 기억하는 대신 db라는 이름으로 지정하기로 함.


IP 주소 대신 db라는 이름을 사용하여 B로 ping을 보내고 싶음.


DB에 ping을 보내려고 하면 A가 db이름을 가진 호스트를 인식하지 못한다는 것을 알 수 있음.


기본적으로 IP 주소 192.168.1.11의 B는 db라는 이름을 가진다고 A에게 알리고 싶음. A에서 /etc/hosts 파일에 추가함으로써 할 수 있음. IP 주소와 호스트가 B에 표시할 이름을 작성. 192.168.1.11 IP 는 db라는 이름을 가진 호스트라고 A에게 알림. 이제 db로 Ping이 올바른 IP로 전송되어 성공적으로 완료됨.


A에 192.168.1.11의 IP가 db라는 호스트라고 알림. A는 그것을 당연하게 여김. A의 /etc/hosts 파일에 무엇을 넣든 참이지만 그것이 참이 아닐 수 있음.


A는 B의 실제 이름이 db라면 확인하지 않는다. 예를 들어, B에서 `hostname`이라는 명령어를 실행하면 host-2라는 이름을 가진다고 나온다. 그러나 A는 신경쓰지 않는다. hosts 파일에 있느 내용대로 한다.


/etc/hosts 파일에서 원하는 만큼의 서버 이름을 가질 수 있음.


A에서 ping이나 ssh 명령을 통해 또는 이 시스템 내의 애플리케이션이나 도구를 통해 다른 호스트의 이름을 참조할 때마다, 호스트는 /etc/hosts 파일을 조사하여 해당 호스트의 IP주소를 찾음.


소수의 시스템으로 구성된 작은 네트워크 내에서 /etc/hosts 파일의 항목들을 쉽게 도달 수 있음.


각 시스템마다 환경의 다른 시스템이 무엇인지 지정. 이것은 과거에 도달하던 방법. 환경이 커지고 파일들이 너무 많은 항목들로 채워질 때까지. → 이러한 항목들을 관리하는 것이 너무 어려워짐.


서버들 중 하나의 IP가 바뀌면 이 모든 호스트의 항목을 수정해야 함. → 이 모든 항목을 중앙에서 관리할 단일 서버로 옮기기로 결정. → DNS 서버라고 함. 자신의 /etc/hosts에서 찾는 대신 server에서 찾도록 모든 호스트에 지시함.


어떻게 호스트가 DNS server를 가리키도록 하는가? DNS server는 192.168.1.100을 가짐. 모든 호스트는 `/etc/resolv.conf`에 DNS resolutino 구성 파일이 있음. `nameserver    192.168.1.100` 라고 DNS server의 주소를 명시함.


더 이상 호스트의 /etc/hosts 파일에 항목이 필요하지 않지만 그렇다고 hosts 파일에 항목이 가질 수 없는 것은 아님. 예를 들어 나만의 테스트 서버를 프로비저닝하려고 함. 이때 이름을 DNS server에 추가할 필요 없음. 이 경우 /etc/hosts 파일에 추가하면 됨.


/etc/hosts와 DNS server 두 곳에 항목이 있다면 /etc/hosts 파일을 먼저 봄. 이 경우 DNS server에서 hosts를 찾지 않음. 그러나 순서를 바꿀 수 있음. /etc/nsswitch.conf에서 순서를 정의할 수 있음.


```bash
cat /etc/nsswitch.conf
...
hosts:          files dns
...
```


hosts 항목이 있는 줄은 첫 번째가 파일이고 그 다음이 DNS임. 모든 호스트마다 /etc/hosts 파일을 먼저 확인함. 그리고 거기에 없으면 DNS server를 확인. 이 순서를 수정함으로써 순서를 바꿀 수 있음.


/etc/hosts와 DNS 서버 모두 알지 못하는 항목임. resolv.conf에 여러 nameserver를 지정할 수 있지만 이미 구성한 DNS server에 알지 못하는 host는 공용 nameserver로 가도록 구성할 수 있음.

> Domain Names

root


top level domain name


subdomain


![1200px-DNS_schema.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/DNS_schema.svg/1200px-DNS_schema.svg.png)


조직 내에서 apps.google.com에 도달하려고 할 때, 먼저  요청이 조직의 내부 DNS 서버에 도달. 알지 못하면 인터넷으로 요청을 넘김. 인터넷에서 apps.google.com으로 넘기려는 서버의 IP 주소는 여러 서버의 도움으로 해결할 수 있음.


root DNS 서버는 요청을 확인하고 .com 서비스를 제공하는 DNS 서버로 전달. .com DNS 서버는 요청을 확인하여 google에 전달. Google의 DNS 서버는 app 서비스를 제공하는 IP를 제공.


모든 결과를 가속화하기 위해 조직의 DNS 서버는 이 IP를 일반적으로 몇 초에서 몇 분까지 일정 기간 동안 캐싱할 수 있도록 선택 가능. 매번 이 전체 과정을 할 필요 없음.


ping을 보내는 데 web으로 입력하여 web.mycompany.com으로 전달하고 싶음. → /etc/resolv.conf 파일에 search라는 항목을 입력하고 mycompany.com을 지정. 다시 ping web을 하면 web.mycompany.com으로 ping이 보내짐. mycompany.com과 prod.mycompany.com이라고 하면 web이라고 했을 때 web.mycompany.com이나 web.prod.mycompany.com을 의미할 것임. 그래서 호스트 이름을 찾을 때 모든 도메인 이름을 검색하려고 함.

> record type

A 호스트 이름에 IP를 저장.  ex) A   web-server     192.168.1.1


AAAA 호스트 이름에 IPv6 저장.   ex) AAAA    web-server     2001:0db8:85a3:0000:0000:8a2e:0370:7334


CNAME 한 이름에 다른 이름 맵핑.  ex) CNAME    food.web-server     eat.web-server, hungry.web-server


이 외에도 더 있음.

> nslookup

ping이 항상 DNS를 테스트하는 데 적합한 도구가 아닐 수 잇음. nslookup과 같은 몇몇 도구가 있음.


DNS 서버로 호스트 이름을 질의할 때 `nslookup` 사용. `nslookup`은 로컬에 /etc/hosts 파일은 고려하지 않음. `nslookup` 은 DNS 서버에만 질의함.

> dig

 `dig`도 마찬가지. dig는 DNS name을 테스트할 수 있는 또 다른 유용한 도구. 서버에 저장된 유사한 형식으로 더 많은 세부 사항을 반환.

> Core DNS

CoreDNS 바이너리는 Github 릴리스 페이지에서 다운로드 하거나 도커 이미지로 다운 가능. curl이나 wget을 사용하여 다운로드. DNS server를 시작하기 위해 실행파일 시작. DNS 서버는 기본적으로 53번 포트. 현재 호스트 이름과 맵핑된 IP 주소가 없음.  DNS 서버의 /etc/hosts 파일에 모두 입력. 그리고 이 파일을 사용하도록 CoreDNS를 구성. CoreDNS는 Corefile이라는 파일에서 IP에서 호스트 이름으로의 맵핑을 가져오도록 함. DNS 서버가 실행되면 이제 서버의 /etc/hosts 파일에서 IP와 이름을 선택함. CoreDNS는 플러그인을 통해 DNS 항목을 구성하는 다른 방법도 있음.


[https://coredns.io/plugins/kubernetes/](https://coredns.io/plugins/kubernetes/)


## Prerequisite - Network Namespaces


네트워크 네임스페이스는 네트워크 분리를 구현하기 위해 도커와 같이 컨테이너에 의해 사용됨.


네임스페이스란? 호스트가 집이라면 네임스페이스는 방이다.방은 아이별로 프라이버시를 제공하도록 한다.아이들은 자신 방만 볼 수 있다. 그래서 그들 방 밖에서는 무슨 일이 일어나는지 알 수 없음. 그들은 집에 살고 있는 사람이 한 명만 있다고 간주하지만 부모는 모든 공간을 볼 수 있다. 원한다면 방 두 사이의 연결을 만들 수 있다. 컨테이너를 생성할 때 컨테이너가 고립되어 있는지, 호스트나 다른 컨테이너에서 다른 프로세스를 보지 않는지 확인해야 함. 그래서 네임스페이스를 사용하여 호스트에 그것에 대한 특별한 방을 생성.


컨테이너에 관해서는 컨테이너는 실행되는 프로세스만 보고 자체 호스트에 있다고 생각. 그러나 기본 호스트는 컨테이너 내부에서 실행되는 프로세스를 포함한 모든 프로세스에 대한 가시성을 가짐. → 컨테이너 내에서 프로세스를 나열하면 이를 확인할 수 있음. 


프로세스 ID 1을 가진 단일 프로세스를 봄. 기본 호스트에서 루트 사용자와 동일한 프로세스를 나열하면, 이번에는 컨테이너 내부에서 실행되는 프로세스와 함께 다른 프로세스 ID가 표시됨. → 컨테이너 내부와 외부에서 서로 다른 프로세스 ID로 실행되는 동일한 프로세스임. →  네임스페이스가 동작하는 방법.


네트워킹에 대해서 호스트는 LAN에 연결되는 자체 인터페이스를 가짐. 호스트는 나머지 네트워크에 대한 정보를 가진 자체 라우팅과 ARP 테이블을 가짐. 컨테이너로부터 모든 세부 사항을 감추고 싶음.


컨테이너가  생성될 때, 호스트의 네트워크 관련 정보에 대한 가시성이 없는 네트워크 네임스페이스를 생성. 그것의 네임스페이스 내에서 컨테이너는 자체 가상 인터페이스를 가질 수 있음.


리눅스 호스트에서 새 네트워크 네임스페이스를 만들기 위해 `ip netns add` 명령어를 실행. 이 경우 두 네트워크 네임스페이스를 생성. `ip netns` 명령어를 실행하여 네트워크 네임스페이스 나열.


이제 우리가 만든 네트워크 네임스페이스 내에서 동일한 것을 어떻게 볼 수 있는가? → red나 blue 네임스페이스 내에서 같은 명령어를 실행하려면 어떻게 해야 하는가? `ip netns exec`  명령어 뒤에 네임스페이스 이름을 붙임. `ip link`  명령어가 네임스페이스 안에서 실행됨.


```bash
ip netns exec red ip link
```


또 다른 방법으로는 `ip link` 명령어에  `-n`  옵션을 추가.


```bash
ip -n red link
```


두 결과 모두 같음. 두 번째 방법은 더 간단하지만, 네임스페이스 내부에서 ip 명령어를 실행하려는 경우에만 작동.


보다시피 루프백 인터페이스만 나열되어 있어 호스트에서 eth 인터페이스를 볼 수 없음. 그래서 네임스페이스를 가지고 컨테이너가 호스트 인터페이스를 보지 못하도록 성공적으로 막았음.


ARP 테이블도 마찬가지임. 호스트에서 `arp`명령을 실행하면 항목 목록이 표시되지만, 컨테이너 내부에서 실행하면 항목이 표시되지 않음. 라우팅 테이블도 마찬가지. 현재 이 네트워크 네임스페이스들은 네트워크 연결이 없고, 자체 인터페이스도 없으며, 기본 호스트 네트워크를 볼 수 없음.


먼저 네임스페이스 자체 간의 연결성을 확인해보자. 케이블을 사용하여 각 기기의 인터넷 인터페이스에 두 개의 물리적 기기를 연결하는 것처럼, 가상 이더넷 쌍 또는 가상 케이블(파이프)을 사용하여 두 개의 네임스페이스를 함께 연결할 수 있음. 케이블을 만들기 위해  veth로 설정된 유형을 가지고  `ip link`  명령어 실행하고 v8 red와 v8 blue 두 끝을 명시함.


```bash
ip link add veth-red type veth peer name veth-blue
```


그 다음은 적절한 네임스페이스에 각 인터페이스를 부착. `ip link set veth red netns red` 명령어 사용. blue 네임스페이스도 마찬가지로 인터페이스를 부착하면 됨.


```bash
ip link set veth-red netns red
ip link set veth-blue netns blue
```


그런 다음 각 네임스페이스에 IP주소를 할당할 수 있음. `ip addr` 명령어를 사용하여 각 네임스페이스에 IP 주소를 할당할 것.


```bash
ip -n red addr add 192.168.15.1 dev veth-red
ip -n blue addr add 192.168.15.2 dev veth-blue
```


그런 다음 `ip link set up` 명령어를 사용하여 인터페이스를 호출.


```bash
ip -n red link set veth-red up
ip -n blue link set veth-blue up
```


link가 올라가고 이제  네임스페이스가 서로 연결될 수 있음. red 네임스페이스에서 blue의 IP로 ping을 시도. red 네임스페이스의 ARP 테이블을 보면 blue가 192.168.15.2에 MAC 주소로 식별된 것을 볼 수 있음. 마찬가지로 blue 네임스페이스의 ARP 테이블을 보면 red도 식별된 것을 볼 수 있음.


```bash
ip netns exec red ping 192.168.15.2
ip netns exec red arp
ip netns exec blue arp
```


호스트의 ARP 테이블을 가지고 비교하면 호스트 ARP 테이블은 우리가 만든 새로운 네임스페이스에 대해 전혀 알지 못 함. 그 안에 우리가 만든 인터페이스에 대해서도 전혀 알지 못 함.


네임스페이스가 더 많으면 어떻게 하는가? 어떻게 하면 모두가 서로 소통할 수 있는가? 실제 세계와 마찬가지로 호스트 내부에 가상 네트워크를 생성.


네트워크를 만들려면 스위치가 필요하므로 가상 네트워크를 만들려면 가상 스위치가 필요. 그래서 호스트 내에 가상 스위치를 생성하고 네임스페이스를 연결. 하지만 호스트 내에서 가상 스위치를 만들려면 어떻게 해야 하는가? Linux Bridge, Open vSwitch 등 네이티브 솔루션을 사용하여 할 수 있음.


이 경우 Linux Bridge 사용. 내부 브릿지 네트워크를 만들기 위해 브릿지로 설정된 유형을 가지고 `ip link add` 명령어를 사용하여 호스트에 새 인터페이스 추가.


```bash
ip link add v-net-0 type bridge
```


호스트 관점에서 보면 그저 또 다른 인터페이스. eth 인터페이스와 같이. 다른 인터페이스들과 `ip link` 명령어 출력에 나타남. 현재는 내려가 있음으로 올려야 함. `ip link set up` 을 사용. 네임스페이스의 경우, 이 인터페이스는 연결할 수 있는 스위치와 같음. 네임스페이스에 대한 스위치이자 호스트의 인터페이스.


```bash
ip link set dev v-net-0 up
```


이제 네임스페이스를 가상 네트워크 스위치에 연결. 이전에 두 네임스페이스를 직접 연결하고 싶어 veth-red와 veth-blue 쌍을 가지로 케이블을 생성. 이제 모든 네임스페이스를 브릿지에 연결할 것이므로 더 이상 케이블은 필요하지 않음. 이것을 제거.


```bash
ip -n red link del veth-red
```


delete 명령어를 실행할 때 한 개만 지우면 쌍이었기 때문에 다른 쪽으로 자동적으로 제거됨.


이제 네임스페이스를 bridge에 연결할 수 있는 새 케이블 생성. `ip link add` ㅁ여령을 실행하여 이전처럼 한쪽 끝에 veth-red가 있는 쌍을 만들지만 이번에는 끝에 다른 아름이 붙여짐. 


```bash
ip link add veth-red type veth peer name veth-red-br
```


veth-red-br은 브릿지 네트워크에 연결하는 것. 이 명명 규칙은  red 네임스페이스와 연관된 인터페이스를 쉽게 식별하는 데 도움이 됨. 마찬가지로, blue 네임스페이스를 브릿지 네트워크에 연결할 케이블 생성.


```bash
ip link add veth-blue type veth peer name veth-blue-br
```


케이블이 준비되었으므로 네임스페이스에 연결. 인터페이스 한쪽 끝을 red 네임스페이스에 연결하려면 `ip link set veth-red netns red` 명령어 실행. 다른 쪽 끝을 브릿지 네트워크에 연결하려면 `ip link set veth-red-br master v-net-0` 를 실행. blue도 마찬가지.


```bash
ip link set veth-red netns red
ip link set veth-red-br master v-net-0

ip link set veth-blue netns blue
ip link set veth-blue-br master v-net-0
```


이제 링크에 IP 주소를 설정하고 올림. 이전과 같은 IP 주소 사용하고 장치를 올림.


```bash
ip -n red addr add 192.168.15.1 dev veth-red
ip -n blue addr add 192.168.15.2 dev veth-blue
ip -n red link set veth-red up
ip -n blue link set veth-blue up
```


이제 컨테이너들은 네트워크를 통해 서로 연결 가능. 나머지 두 네임스페이스도 네트워크에 연결하는 동일한 절차를 따름.


호스트에는 192.168.1.2를 할당. 네임스페이스의 인터페이스 중 하나에 도달하려고 하면 어떻게 되는가? 도달하지 못함. 호스트와 네임스페이스는 다른 네트워크에 있음. 그러나 이 사이를 정말 연결하고 싶다면? 가상 스위치는 실제로 호스트의 네트워크 인터페이스라고 했음. 그러므로 호스트의 192.168.15 네트워크 인터페이스가 있음. 이 인터페이스는 네임스페이스에 도달할 수 있도록 IP 주소를 할당하기만 하면 됨. `ip addr` 명령어를 사용해  192.168.15.5를 인터페이스에 설정.


```bash
ip addr add 192.168.15.5/24 dev v-net-0
```


이제 로컬 호스트에서 red 네임스페이스로 ping을 보낼 수 있음.


이 전체 네트워크는 여전히 비공개이며 호스트 내에서 제한되어 있음. 네임스페이스 내부에서는 외부 세계에 도달할 수 없으며, 외부 세계의 누구도 내부에 호스팅된 서비스나 애플리케이션에 도달할 수 없음.


외부 세계로 통하는 유일한 문은 호스트의 이더넷 포트. 그렇다면 이더넷 포트를 통해 회선 네트워크에 도달하도록 이 브리지를 어떻게 구성할 수 있는가? 주소가 192.168.1.3인 다른 호스트가 회선 네트워크에 연결되어 있다고 가정. 네임스페이스 내에서 어덯게 호스트에 도달할 수 있는가? 네임스페이스에서 호스트로 ping을 보내면 무슨 일이 발생하는가? blue 네임스페이스에 따르면 현재 네트워크 192.168.15와 다른 192.168.1의 네트워크에 도달하려고 함. 그래서 그 네트워크를 찾는 방법을 알아보기 위해 라우팅 테이블을 살펴봄. 라우팅 테이블에는 다른 네트워크에 대한 정보가 없음. 그래서 네트워크에 연결할 수 없다는 메시지가 다시 옴. 따라서 외부 세계로 통하는 게이트웨이나 문을 제공하기 위해 라우팅 테이블에 항목을 추가해야 함.


어떻게 게이트웨이를 찾는가? 게이트웨이는 다른 네트워크와 연결되는 로컬 네트워크의 시스템.


로컬 호스트에는 개인 네트워크를 연결할 수 있는 인터페이스가 있어서 네임스페이스에 핑을 보낼 수 있음. 그러므로 로컬 호스트가 두 네트워크를 연결하는 게이트웨이.


```bash
ip netns exec blue ip route add 192.168.1.0/24 via 192.168.15.5
```


이제 blue 네임스페이스에서 192.168.1 네트워크를 통해 모든 트래픽을 라우팅할 수 있음. 호스트는 두 IP를 가짐. 하나는 브릿지 네트워크, 또 다른 하나는 외부 네트워크. 라우트에서 사용할 수 있는가? ❌. blue 네임스페이스는 로컬 네트워크의 게이트웨이로만 도달할 수 있음. 핑을 보내면 네트워크에 도달할 수 없다는 메시지를 받지 않지만, 핑에 대한 응답을 받지 못 함. 왜 그러는가? 알지 못하는 내부 사설 IP를 가지고 있어서 도달할 수 없음. 이제는 NAT가 필요함.


NAT는 어떻게 추가하는가? IP 테이블을 사용하여 할 수 있음. NAT IP 테이블에 새 규칙 추가하여 소스 네트워크에서 들어오는 모든 패킷의 발신 주소를 가리거나 대체.


```bash
iptables -t nat -A POSTROUTING -s 192.168.15.0/24 -j MASQUERADE
```


이렇게 하면 네트워크 외부에서 이러한 패킷을 수신하는 사람은 네임스페이스 내에서가 아니라 호스트에서 온 것이라고 생각. 이제 ping을 보내면 외부에 도달할 수 있음. 마침내 LAN이 인터넷에 연결됨. 우리는 네임스페이스가 인터넷에 연결되길 원함. blue 네임스페이스에서 8.8.8.8로 ping을 시도. 도달할 수 없다는 메시지가 옴. → 라우팅 테이블에서 192.168.1 외에 다른 경로가 없음. 네임스페이스는 호스트가 도달할 수 있는 네트워크에 도달할 수 있으므로 외부 네트워크에 도달할 수 있음. 그러므로 기본 게이트웨이를 추가.


```bash
ip netns exec blue ip route add default via 192.168.15.5
```


이제 네임스페이스에서 외부에 도달할 수 있음. 네임스페이스는 내부 사설망으로 외부에서 누구도 도달할 수 없음. 호스트 자체에서만 도달 가능. 다른 호스트에서도 통신할 수 있도록 하려면 두 가지 옵션이 있음. 첫 번째는 두 번째 호스트에게 개인 네트워크에 대한 정보를 주는 것. 다른 옵션은 blue 네임스페이스에 할당된 iptable을 사용하여 포트 포워딩 역할을 추가하여 로컬 호스트 80 포트로 들어오는 모든 트래픽이 blue 네임스페이스에 할당된 80 포트로 전달되도록 하는 것.


```bash
iptables -t nat -A PREROUTING --dport 80 --to-destination 192.168.15.2:80 -j DNAT
```


## Prerequisite - Docker Networking


다양한 네트워킹 옵션 중에서 선택 가능.

> NONE

도커 컨테이너는 어떤 네트워크도 연결되지 않음. 외부로 나갈 수 없고, 외부에서도 내부로 도달❌.


여러 컨테이너에 있는 경우 네트워크가 되지 않고 모두 생성되므로 외부와 대화❌.

> Host Network

호스트와 컨테이너 사이 네트워크 분리가 없음.


컨테이너에서 80포트로 애플리케이션을 배포하면 다른 추가 포트 맵핑 없이 호스트의 80포트로 이용 가능.


동일한 포트에서 동일한 컨테이너의 다른 인스턴스를 실행하려고 하면 호스트 네트워킹을 공유하기 때문에 작동❌. 두 프로세스가 동시에 동일한 포트 사용❌.

> Bridge

내부 사설망이 도커 호스트와 컨테이너에 생성됨. 172.17.0.0을 기본 주소로 가짐.이 네트워크로 연결된 각 장치는 이 네트워크에서 자신의 사설망 주소를 얻음.


도커가 호스트에 설치될 때 기본적으로 브릿지라 불리는 사설망이 생성됨. `docker network ls` 명령어로 볼 수 있음. 이제, 도커는 Bridge라는 이름으로 네트워크를 부르지만, 호스트에서는 Docker0라는 이름으로 생성됨. `ip link` 출력으로 볼 수 있음.


도커는 내부적으로 ip link add 명령어를 실행.


인터페이스, 즉 네트워크는 현재 내려가있음.


브릿지 네트워크는 호스트에서 인터페이스 같지만 호스트 내 컨테이너나 네임스페이스에서 스위치같음.


호스트의 Docker0는 172.17.0.1을 할당. 컨테이너를 생성할 때  도커는 이것에 대한 네트워크 네임스페이스를 생성.


도커 컨테이너에 어떻게 브릿지를 연결하는가? 도커 호스트에서 `ip link` 명령어를 실행하면 Docker0, 로컬 브릿지에 붙어있느 인터페이스의 끝을 볼 수 있음. 이번에는 `-n <namespace>`를 가지고 동일한 명령어를 실행하면 컨테이너 네임스페이스 내 인터페이스의 다른 끝이 나열됨.


## Prerequisite - CNI


CNI는 컨테이너 런타임 환경에서 네트워킹 문제를 해결하기 위해 프로그램을 개발하는 방법을 정의하는 일련의 표준.


그 프로그램들은 플러그인이라고 불림. 이 경우, Bridge 프로그램은 CNI를 위한 플러그인임.


CNI는 플러그인을 개발하는 방법과 컨테이너 실행 시간을 호출하는 방법을 정의. CNI는 컨테이너 실행 시간과 플러그인에 대한 일련의 책임을 정의.

> Container Network Interface
- Container Runtime must create network namespace
- Identify network the container must attach to
- Container Runtime to invoke Network Plugin (bridge) when container is added.
- Container Runtime to invoke Network Plugin (bridge) when container is deleted.
- JSON format of the Network Configuration
- Must support command line arguments ADD/DEL/CHECK
- Must support parameters container id, network ns etc..
- Must manage IP address assignment to Pods
- Must return results in a specific format

모든 실행 시간은 모든 플러그인과 함께 작동할 수 있어야 함.


모든 컨테이너 런타임은 CNI 표준을 구현하므로 플러그인이 함께 작동할 수 있음. 그러나 도커는 CNI를 구현하지 않음.


도커는 CNI와 유사하지만 몇 가지 차이점이 있는 컨테이너 네트워킹 문제를 해결하기 위한 또 다른 표준인 컨테이너 네트워크 모델을 의미하는 CNM이라는 자체 표준 세트를 가지고 있음.


차임점으로 인해 이러한 플러그인은 기본적으로 Docker와 통합되지 않으므로 Docker 컨테이너를 실행하고 CNI를 사용할 네트워크 플러그인을 지정할 수 없음.


## Cluster Networking


쿠버네티스 클러스터는 마스터와 워커 노드로 구성됨. 각 노드는 적어도 네트워크에 연결된 하나의 인터페이스를 가짐. 각 인터페이스는 구성된 주소를 가져야 함. 호스트는 유일한 호스트 이름 뿐만 아니라 유일한 MAC 주소를 가져야 함. 특히, 기존 VM에서 복제하여 VM을 만드는 경우 유의.


[https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#check-required-ports](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#check-required-ports)


[https://kubernetes.io/docs/reference/networking/ports-and-protocols/](https://kubernetes.io/docs/reference/networking/ports-and-protocols/)


## Practice Test - Explore Kubernetes Environment

1. 클러스터 노드 수
2. controlplane의 내부 IP 주소는?

    ```bash
    kubectl get no -o wide
    # INTERNAL_IP 확인.
    ```

3. controlplane 노드에 클러스터 연결을 위해 구성된 네트워크 인터페이스는?

    ```bash
    ip addr or ip link
    ```

4. controlplane 노드에서 인터페이스의 MAC 주소는?

    ```bash
    ip addr show eth0
    ```

5. node01에 할당된 IP 주소는?

    ```bash
    kubectl get no -o wide
    # INTERNAL-IP 확인.
    ```

6. node01에 할당된 MAC 주소는?

    ```bash
    ssh node01
    ip addr or ip link
    ```

7. container runtime으로 Containered 사용. controlplane에서 Containered로 생성된 interface/bridge는 무엇인가?

    ```bash
    ip addr or ip link
    
    ip addr show type bridge # 리눅스 호스트에서 브릿지 인터페이스가 뭔지 모르겠다면
    ```

8. cni0 인터페이스의 상태는?
9. controlplane 노드에서 google로 ping을 보내면 어디서 경로를 가져오는가? 기본 게이트웨이의 IP 주소는?

    ```bash
    ip route
    ```

10. controlplane 노드에서 kube-scheduler가 수신하는 포트는? 10259

    ```bash
    netstat -npl | grep -i scheduler
    ```

11. ETCD는 두 포트에서 수신 중임. 클라이언트 연결이 설정된 것은? 2379

    ```bash
    netstat -npa | grep -i etcd
    netstat -npa | grep -i etcd | grep -i 2379 | wc -l
    netstat -npa | grep -i etcd | grep -i 2380 | wc -l
    ```


    2379는 모든 controlplane 구성 요소가 ETCD와 연결하는 포트. 2380은 ETCD 간 연결만을 위한 것. 다중 노드에 경우 이렇지 않음.


## Pod Networking

> Network Model
- Every POD should have an IP Address.
- Every POD should be able to communicate with every other POD in the same node.
- Every POD should be able to communicate with every other POD on other nodes without NAT.

IP 주소가 무엇인지, 어떤 범위 또는 서브넷에 속하는지는 중요하지 않음.


IP 주소를 자동으로 할당하고 노드의 포드와 다른 노드의 포드 간 연결을 설정하는 솔루션을 구현할 수 있다면 충분.


Kubernetes에서 Pod가 생성될 때 자동적으로 스크립트를 어떻게 실행하는가?  CNI가 중간자 역할을 하는 이유임. CNI가 우리에게 스크립트가 이렇게 되어야 한다고 말해줌. 따라서 CNI 기준을 충족하기 위해 스크립트를 조금 수정해야 함. 네트워크에 컨테이너를 추가하는 추가 섹션과 네트워크에서 컨테이너 인터페이스르 ㄹ삭제하고 IP 주소를 해제하는 삭제 섹션 등을 포함해야 함.


```shell
ADD)
  # Create veth pair
  # Attach veth pair
  # Assign IP Address
  # Bring Up Interface
  ip -n <namespace> link set ....
  
DEL)
  # Delete veth pair
  ip link del ....
```


이제 스크립트가 준비됨. 각 노드의 컨테이너 런타임은 컨테이너를 생성하는 역할을 함. 컨테이너가 생성될 때마다 컨테이너 런타임은 실행될 때 명령줄 인수로 전달된 CNI 구성을 살펴보고 스크립트의 이름을 식별함. 그런 다 cni/bin 디렉토리를 찾아 스크립트를 찾고, 추가 명령어와 컨테이너의 이름 및 네임스페이스 ID를 사용하여 스크립트를 실행한 다음 나머지는 스크립트가 처리.


```bash
/etc/cni/net.d/net-script.conflist
/opt/cni/bin/net-script.sh
./net-script.sh add <container> <namespace>
```


## CNI in kubernetes


CNI에 따르면, 컨테이너 런타임의 경우 Kubernetes는 컨테이너 네트워크 네임스페이스를 생성하고, 적절한 네트워크 플러그인을 호출하여 네임스페이스를 식별하고 올바른 네트워크에 연결하는 역할을 함. 그렇다면 Kubernetes에 사용할 CNI 플러그인을 어디에 지정해야 하는가? 컨테이너를 생성한 후 적절한 네트워크 플러그인을 호출해야 하므로, 해당 구성 요소는 컨테이너를 생성하는 Kubernetes 내의 구성 요소에 의해 호출되어야 함.


컨테이너 런타임을 어떻게 구성하여 특정 플러그인을 사용할 수 있을까? 우선, 네트워크 플러그인은 모두 디렉토리 /opt/cni/bin에 설치됨. 그래서 컨테이너 런타임에서 플러그인을 찾음. 그러나 어떤 플러그인을 사용하고 어떻게 사용할지는 디렉토리  /etc/cni/net.d에 구성되어 있을 수 있음. 이 디렉토리에는 각 플러그인을 구성하는 여러 구성 파일이 있을 수 있음. cni/bin 디렉토리를 보면 bridge, DHCP, flannel 등의 모든 지원되는 CNI 플러그인을 실행파일로 가지고 있음을 알 수 있음. cni/config 디렉토리에는 일련의 구성 파일이 있음. 여기서 컨테이너 런타임이 어떤 플러그인을 사용해야 하는지 찾음. 이 경우 Bridge 구성 파일을 찾음. 여기에 여러 파일이 있는 경우, 브리지 구성 파일을 알파벳 순서대로 선택. bridge conf 파일을 보면 다음과 같이 보임.


```json
{
    "cniVersion": "0.2.0",
    "name": "mynet",
    "type": "bridge",
    "isGateway": true,
    "isMasq": true,
    "ipam": {
        "type": "host-local",
        "subnet": "10.22.0.0/16",
        "routes": [
            {  "dst": "0.0.0.0/0"  }
        ]
    }
}
```


플러그인 구성 파일의 CNI 표준에 의해 정의된 형식. ipam 섹션은 Pod 및 필요한 경로에 할당될 IP 주소의 서브넷 범위를 지정. host-local 유형은 IP 주소가 이 호스트에서 로컬로 관리됨을 나타냄. DHCP 서버와 달리 원격으로 유지 관리하는 이 유형은 외부 DHCP 서버를 구성하기 위해 DHCP로 설정할 수도 있음.


## CNI weave


## Practice Test - Explore CNI


## Practice Test - Deploy Network Solution


## IP Address Management -  Weave


## Practice Test - Networking Weave


## Service Networking


## Practice Test - Service Networking


## DNS in kubernetes


## CoreDNS in kubernetes


## Practice Test - Explore DNS


## Ingress


## Practice Test - Ingress -1


## Practice Test - Ingress -2


## Introduction to Gateway API


## Practice Test - Gateway API

