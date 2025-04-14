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


100개의 노드를 가진 대규모 환경, 각 노드에 100개의 파드가 있는 경우 이러한 경우에는 라우팅 테이블이 실용적이지 않음. 라우팅 테이블은 많은 개체를 지원하지 못함.


weave CNI 플러그인이 클러스터에 배포되는 경우 각 노드에 에이전트 또는 서비스를 배포. 노드, 네트워크, Pod에 관한 정보를 교환하기 위해 서로 소통. 각 에이전트나 피어는 전체 설정의 토폴로지를 저장. 그렇게 하면 다른 노드의 Pod와 IP를 알 수 있음.


weave는 weave에 노드와 네임의 자체 브리지를 생성한 다음 각 네트워크에 IP 주소를 할당. 각 노드에 할당한 IP 주소의 정확한 범위를 파악할 수 있음.


예를 들어, weave bridge와 도커가 만든 도커 브리지에 pod를 연결할 수 있음. 패킷이 목적지에 도달하는 경로는 컨테이너에 구성된 경로에 따라 달라짐. weave는 pod가 에이전트에게 도달하도록 올바른 경로를 설정하고 다른 Pod를 처리함. 이제 패킷이 한 파드에서 다른 노드로 전송될 때, weave는 패킷을 가로채서 별도의 네트워크에 있음을 식별한 다음, 이 패킷을 새로운 소스와 목적지가 있는 새로운 패킷으로 캡슐화하여 네트워크를 통해 전송함. 반대편에 도착하며 다른 weave 에이전트가 패킷을 가져와 캡슐화를 해제하고 패킷을 올바른 pod로 라우팅함.


kubenetes 클러스터에 weave를 어떻게 배포하는가? weave와 weave pod는 클러스터의 각 노드에 서비스나 데몬으로 수동 배포될 수 있음. kubenetes가 이미 설정되어 있는 경우 클러스터에 pod로 배포하는 것이 더 쉬운 방법.


**`kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml`** 로 클러스터에 weave를 배포할 수 있음. 이렇게 하면 클러스터에 weave가 필요한 모든 구성 요소가 배포됨. 가장 중요한 것은 weave peer가 데몬 셋으로 배포된다는 점. weave cluster에 완벽하게 작동. 


kubeadm tool과 weave 플러그인과 클러스터를 배포한다면 weave peer가 각 노드에 pod로 배포되는 것을 알 수 있음.


## Practice Test - Explore CNI

1. kubelet 서비스를 관찰하고 kubenetes에 대해 설정된 컨테이너 런타임 엔드포인트 값을 확인.

    ```bash
    ps aux | grep kubelet | grep --color container-runtime-endpoint
    root        4108  0.0  0.1 2932012 96340 ?       Ssl  05:03   0:10 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml 
    --container-runtime-endpoint=unix:///var/run/containerd/containerd.sock
     --pod-infra-container-image=registry.k8s.io/pause:3.10
    ```

2. 모든 CNI 지원 플러그인 바이너리로 구성된 경로는 무엇인가?

    /opt/cni/bin

3. 다음 중 이 호스트에서 사용 가능한 CNI 플러그인 목록에서 사용할  수 없는 플러그인은?

    cisco

4. Kubernetes 클러스터에 사용되도록 구성된 CNI 플러그인은?

    ```bash
    ls /etc/cni/net.d
    10-flannel.conflist
    ```

5. 컨테이너와 관련된 네임스페이스가 생성된 후 kubelet에서 실행되는 바이너리 실행 파일은 무엇인가?

    ```bash
    cat /etc/cni/net.d/10-flannel.conflist 
    {
      "name": "cbr0",
      "cniVersion": "0.3.1",
      "plugins": [
        {
          
    "type": "flannel"
    ,
          "delegate": {
            "hairpinMode": true,
            "isDefaultGateway": true
          }
        },
        {
          "type": "portmap",
          "capabilities": {
            "portMappings": true
          }
        }
      ]
    }
    ```


## Practice Test - Deploy Network Solution

1. 클러스터에 weave-net POD 네트워킹 솔루션을 설치할 것. 먼저 설정을 점검. 기본 네임스페이스에 app이라는 애플리케이션을 배포. Pod 상태는? NotRunning
2. Pod가 실행 중이지 않은 이유는?

    No Network Configured


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/3718d691-5c81-44a9-9521-842342f0196f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDWMQY5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZN2ZUj0pGcB6MqHHMLGA89%2FPFBbcrxXK4Fa34LPsMgIgSmV8EnbJINZafqxiD1qi3ydHrQpEMPPgG4hsDzGexdUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDCulrXBjnL1XIYabYyrcA%2BP5Yc0FosQLkXSp%2Fi6wHHmSJewuE56yS3BmswyoPDUOb3bp1sYgu9DwMbwmS8%2BZNZP032h4hyVBepJj196TRSaetOQynQhmKCfDlJ9ZlQpbHJwycn8%2FpuHYwqcZhvO8%2Fw5ugsGpQZOx7%2BOFwa0XV%2Bey9IpIRA86o6ouW4DxzbNM8w5DOKpZH1VznVcanYsQWIo2%2BeDwBF8VO6oK%2Fx70S6WvBgz1JzRsb27CM6ASle7YOy0Mf%2FjF4m%2Fs47PywuGytpk5EgkEn3G0eIt1I%2FqKiDUDTIZyQQfcjAOptTNjbuneVX%2FntVRTZa%2F0zy7yL4g2giS2x5EqEFq41ZT6KyS8tdGJHfPZSVPURlkgNTGlGwCI3qDkRApHwWQR6me5livQI1LkgWSQ32NHkwus0ZmCU5Mtzmk1wCKPvqSdHwRMKNBtqEtA72%2Bm%2FI6k5QhzDtsBI7xXa%2F8sUwmSK%2BhZQ%2FqikCKmVbPxc1t8PfkV4seym1Bk%2BsqsqxXQuo1Z2TQVlAhoP4FUa6F5g62aFJO7IaKi1plMiwKTzAJabLK7JsEZ08chERLQKoNBVsC9%2FzZxOnxSQPO25oAkEiDfjLYbQQcBuDUyA7WWuCaPpVpwkMqUBgV0j1Xp1g0iMPSZwQJFMMqo9L8GOqUBGraj1v%2BjESdDLQ6HLeon2gE61VuXpL%2FaBhRLuDnP%2F%2B3hJNNncYLZJpqdZb61be4GHhWFK9Qmm26TpsoN9N6mdMHR%2Fd5ZTR0esI6OHAzaUQ1WPFsw1g13kh%2FmqUvaw9CTqx9oVndekBvlVuvmrVNc1PKMGUDlx04UeQOUzro0w0A5BFcEBnh2mGKqZU5V0LLUOSGY2e4kAMtq8WuOtqyvf7jubrLa&X-Amz-Signature=162e9967b4c1c154ea51cfcabf52d77baa57da844da32be76e7b06b4466534a4&X-Amz-SignedHeaders=host&x-id=GetObject)

3. 클러스터에 weave-net 네트워킹 솔루션 배포.

    NOTE: /root/weave 디렉토리 아래에 weave manifest 파일이 이미 제공되어있음.


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f065065c-fca7-4750-ae70-9982763ddb7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7MXSFH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJdWSel0J9KoNKG8fO%2FD%2B6cY73iVbdY6vsc4jGQiKOmAiEAur3W2rAdjDIVd0%2FiofVvX3SKKbLNkwkzq193zdjkP8Aq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDKsn37zXYAiQx%2F7sRyrcA5j9FS4ZLnHcfJEpBvG9Sb0%2F2q2RTJLpvjR%2F04tDirqemL9pn1t1Zg04ym82ICIxZjVY1PlXbWEFGkz6RMoav5jkXZYxJPQAkeRiQQliKZAb%2Fo%2Bxtk4ZVtiJmpbH2uJ3EkjEfJspdf1OAi6t8yQT3MC5gnI6eUF4X7AcSLOsob7qzx29u04KtLeIgbunODwRiE377Gx4GGoHPHMb8XLuMUYH7nPaEtDBPu3D%2Fv9Y9m6IwtIz2e76GmCmrPR47Q1NNsHK87cdOp4pOmd3y%2BKgjeSPkuI4ekb1qxodsSIlbAr7tXL2ev0zAMlwpusNgZMhdlyIvNa%2Fs2%2FP0RgLZJJQ5XyqSRDWfOkFHk13a5jQx4RrkIRvEda3wLXa91MY6XouMtUPEGVzYRhR1W%2BJXoY2QhIwL4tipsHdg8KX9IavdNTQkJ%2B%2F3NPiE0jUVBYjTCnwj7Orc5XO8584b5lnRT1PnGHvSMtr6xpJ8tCjBhd4oWe8pbIVxnbgyikmcDcAiSq310fHx3ea413J10c6S4vN4JMBQZpWsGQAo3NNcOFm1pKQ1By4HOZhJWFOMhUada2H677cWR3sij3FOCdXhjRdiaBLYMlqeNTFDHM6ogPPqj%2FBLP5vdweLqF%2B5dtKOMJao9L8GOqUBl7NE0p6OTItJcEmNuDMrj6PteGAUaqEhTLLVcyH30OP1ioqhotRpijM%2Bk0Yfu%2FnULBpU9qE9kPZgI5dSlzj%2BOOM52ChnX%2FD5U3Uk8vB7leKK16jnS80sRb7BtRZvDRZkAHoH9U32BFM8thGbrc2hCXmiUnLigRRQ3BfxSnpc5DCSFP1e3xbVNXiQnDKdZTdYB0KEk0LcCkde7zpgkVBQIuVjA0e5&X-Amz-Signature=cbe4b74302ae8f7f428d5bbbb8a1a7fa5f07d7169f3449c7db0317592e0ac338&X-Amz-SignedHeaders=host&x-id=GetObject)


## IP Address Management -  Weave


네트워크 솔루션 제공업체에 IP를 할당하는 것은 CNI 플러그인의 책임.


컨테이너 네트워크 네임스페이스에 IP를 할당하는 섹션이 있음. 이러한 IP는 어떻게 관리하는가?


Kubernetes는 우리가 어떻게 하든 신경 쓰지 않음. 중복 IP를 할당하지 않고 제대로 관리하기만 하면 됨.


그리고 쉽게 할 수 있는 방법은 IP 목록을 파일에 저장하고 이 파일을 제대로 관리하기 위해 스크립트에 필요한 코드가 있는지 확인하는 것. 이 파일은 각 호스트에 배치되며 해당 노드의 IP 부분을 관리.


스크립트를 직접 코딩하는 대신, CNI에는 이 작업을 아웃소싱할 수 있는 두 개의 플러그인이 내장되어 있음.


이 경우, 각 호스트에서 IP 주소를 로컬로 관리하기 위해 우리가 따랐던 접근 방식을 구현하는 플러그인이 호스트 로컬 플러그인임. 그러나 여전히 스크립트에서 해당 플러그인을 호출하거나 다양한 종류의 플러그인을 지원하도록 스크립트를 동적으로 만들 수 있음.


CNI 구성 파일에는 IPAM이라는 부분이 있어 사용할 플러그인 유형, 서브넷 및 경로를 지정 가능. 이러한 세부 정보는 스크립트에서 읽을 수 있으며, 매번 호스트 로컬을 사용하도록 하드 코딩하는 대신 적절한 플러그인을 호출할 수 있음. 네트워크 솔루션 업체마다 다르게 처리.


weaveworks가 어떻게 IP 주소를 관리하는지 보자.


기본적으로 weave는 전체 네트워크에 10.32.0.0/12 IP 범위를 할당. 네트워크 IP는 10.32.0.1에서 10.47.255.254 범위로 주어짐. pod에서 사용할 수 있는 대략 100만 개 IP. 이 범위에서 peer들은 IP 주소를 균등하게 나누고 각 노드에 하나의 부분을 할당하기로 결정함. 이 노드에 생성된 pod들은 이 범위 내의 IP를 가지게 될 것. 이러한 범위는 클러스터에 weave 플러그인을 배포할 때 추가 옵션을 설정할 수 있음.


## Practice Test - Networking Weave

1. 클러스터의 노드 수.
2. 이 클러스터에 사용되는 네트워킹 솔루션은?

    ```bash
    ls /etc/cni/net.d/
    10-weave.conflist
    ```

3. 클러스터에 배포된 agent/peers 수.

    ```bash
    kubectl get -n kube-system pods
    ```

4. weave peers는 어떤 노드에 있는가?

    ```bash
    kubectl get -n kube-system pods -o wide
    ```


    One on every node

5. 각 노드에 weave로 생성된 bridge network/interface의 이름은? weave

    ```bash
    ip addr or ip addr show type bridge
    4: weave: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1376 qdisc noqueue state UP group default qlen 1000
        link/ether 7a:00:e2:db:6b:2a brd ff:ff:ff:ff:ff:ff
        inet 10.244.0.1/16 brd 10.244.255.255 scope global weave
           valid_lft forever preferred_lft forever
    ```

6. weave로 구성된 POD IP 주소 범위는?

    ```bash
    kubectl get pods -n kube-system
    
    kubectl logs -n kube-system <weave pod name>
    ```

7. node01에 스케줄링된 POD에 구성된 기본 게이트웨이는?

    ```bash
    kubectl run busybox --image=busybox --dry-run=client -o yaml -- sleep 1000 > busybox.yaml
    
    vi busybox.yaml #➡️ nodeName: node01 추가.
    
    kubectl apply -f busybox.yaml
    
    kubectl exec busybox -- ip route
    default via 
    10.244.192.0
     dev eth0
    10.244.0.0/16 dev eth0 scope link  src 10.244.192.1
    ```


## Service Networking


Cluster IP


NodePort


## Practice Test - Service Networking

1. cluster에서 노드의 네트워크 범위는?

    ```bash
    kubectl get nodes -o wide
    NAME           STATUS   ROLES           AGE   VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION   CONTAINER-RUNTIME
    controlplane   Ready    control-plane   26m   v1.32.0   192.1.208.9    <none>        Ubuntu 22.04.5 LTS   5.4.0-1106-gcp   containerd://1.6.26
    node01         Ready    <none>          26m   v1.32.0   192.1.208.11   <none>        Ubuntu 22.04.4 LTS   5.4.0-1106-gcp   containerd://1.6.26
    
    ip addr
    ```


    192.1.208.0/24

2. 이 클러스터의 POD에 할당된 IP 주소 범위는?

    ```bash
    kubectl get all --all-namespaces
    kubectl logs <weave-net name> -n kube-system
    ```

3. 클러스터 내 서비스에 할당된 IP 범위는? 10.96.0.0/12

    ```bash
    cat /etc/kubernetes/manifests/kube-apiserver.yaml   | grep cluster-ip-range
        - --service-cluster-ip-range=10.96.0.0/12
    ```

4. 이 클러스터에 배포된 kube-proxy pod 수.
5. kube-proxy에 구성된 proxy type.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/d1fa7c4c-b3bb-4327-8825-a89908a088a0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MFRZQND%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqbaRtuKFhX7oGCUVK69DSFkIbyNExoE66YYM6JY4yZAiEAsdF1Z6YMKM9esZDaxw0SixalxRu25dlkumr2yVNLBwsq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHZ6FoFKfwqrJzZ96SrcA5XmuY7%2FluKdG04UGO3Lda7RyTgBDUtH2T1kg5xBLUai5pA9cWqDuIx6QmB%2BMGdGJoqCcmYo4N%2B1sVBTBdjuaqAQrOdLS2SsrFcHL741oyDBIjn7WrSOmxduLd7pY%2Ft94jnk0OH%2BEnEdPTXRTfeYD8JoJb6sn25Z7fiyZWuNtMmohrLj96dI4JjE7loVlBH%2FFyQ4DCkjzETVvilJptvSPrBdPgmLHvXVxpJnTG1iOXjytO0ElbZYZJoRX8LOW1SPIaXELoaINP5%2Bv4rS3xZQ3FPQEWR34DKBCijE6g%2F11qhYFnnGy3JH7eIf6J%2BrB2LuQ2sY4mZmCxV08eV5pHMyrvOau5yceEivlkTyGIBkWnwPc4eKGtIK1zuMItnvDJhuZCBXpOeylOfTbgiBgVRbJC3Yo%2FH0HZuqKlpLqRaJgXgfJ5DRhKwbWgvkOK4GqLsnHya0ptNL4QLaYd903sL05mOXAIkaTZKJys6ovKmXw4RuY1q%2FtTUXMC40iSbhA7PO2L4ZeeHwKGpfkAiaAvjRBhnYgwZM2%2FIhw8onZ0u71aajDOqiaFbq14JuIvPTaEy%2BTF7KlmvG0kSKGlHxP4evViGhkSb%2B983S2t%2F5VUudZae%2FOuFryt9H4Gbcs0X%2BMJyo9L8GOqUBoiQeIPcINqG9MQ4%2FHLuFuEVWVGfhq%2BVY6G0TxHh0VTI9PBYx1X3LuX6SG8iPjILfVWk82RA9GLrEYbYo9DrKRApZLlxLr8ELHFjhorh70j7%2FI%2FmBHOtbOGragdF32HOwaRO2MKIwSEdWKF0o1uhDcqVfNf2DPw8tF1Yi8sQ9Jy0MZe7Fc7wRQ3Qmd0%2BuedzICd%2FVd2dEKEyKNPozjIQP9V17secE&X-Amz-Signature=0d3d2f3ccde17d8a2cb5f0ed3c8c2c9417ab82a440f50dce7df25805eab4036e&X-Amz-SignedHeaders=host&x-id=GetObject)

6. 클러스터에서 모든 노드에 kube-proxy pod가 실행 중임을 어떻게 보장하는가? kube-proxy pod를 관찰하고 배포 방법을 확인.

    using daemonset


## DNS in kubernetes


Kubernetes는 클러스터를 설정할 때 기본적으로 내장된 DNS 서버를 배포한다. Kubernetes를 수동으로 설정하면 혼자서 가능.


Apps라는 이름을 가진 별도의 네임스페이스가 있다고 가정.


기본 네밍스페이스에서 참조하려면 web-servce.apps라고 표시해야 함. 서비스의 마지막 이름은 네임스페이스의 이름. 각 네임스페이스마다 DNS server는 sub domain을 생성. 모든 서비스는 svc라는 또 다른 하위 도메인으로 함께 그룹화됨.


네임스페이스의 모든 pod와 서비스는 네임스페이스의 하위 도메인 내에서 함께 그룹화됨.


모든 서비스와 pod는 클러스터의 경로 도메인으로 그룹화되며, 기본적으로 클러스터는 cluster.local로 설정됨. 그러므로 web-service.apps.svc.cluster.local URL을 사용하여 서비스 접근 가능. 서비스에 대한 정식 도메인 이름.


Pod는 기본적으로 record를 생성하지 않음. 그러나 명시적으로 사용 가능.


일단 활성화되면 pod에 대해서도 레코드가 생성됨. pod 이름을 사용하지 않음. pod 마다 Kubernetes는 ‘-’를 가지고 IP 주소에서 ‘.’을 대체함으로써 이름을 생성. 네임스페이스는 똑같이 유지하고 type은 pod로 설정. root domain은 항상 cluster.local


| Hostname    | Namespace | Type | Root          | IP Address    |
| ----------- | --------- | ---- | ------------- | ------------- |
| web-service | apps      | svc  | cluster.local | 10.107.37.188 |
| 10-244-2-5  | apps      | pod  | cluster.local | 10.244.2.5    |
| 10-244-1-5  | default   | pod  | cluster.local | 10.244.1.5    |


## CoreDNS in kubernetes


IP 주소를 가진 두 pod가 주어짐.


서로 통신하기 위해 각자 /etc/hosts 파일에 항목을 추가. 클러스터에 수천 수백개의 pod가 매번 생성되고 삭제될 때 적합하지 않음.


이러한 항목을 중앙 DNS server로 이동. /etc/resolv.conf 파일에  항목을 추가함으로써 DNS server를 가리키도록 함.


CoreDNS를 직접 배포할 때 실행했던 것과 동일한 실행 파일인 CoreDNS 실행 파일을 실행. CoreDNS는 구성 파일이 필요함. `Corefile`이라는 이름을 가진 파일 사용. `/etc/coredns`에 위치함.


파일 안에 주황색으로 강조 표시된 여러 플러그인이 구성되어 있음. 플러그인은 오류 처리, 상태 보고, 모니터링 지표, 현금 등을 위해 구성됨. CoreDNS를 Kubernetes와 함께 ㅈ가동하게 만드는 플러그인은 Kubernetes 플러그인이며, 이 플러그인은 클러스터의 최상위 도메인 이름이 설정된 곳. 이 경우, cluster.local


그러므로 CoreDNS server에 모든 레코드는 이 도메인 아래에 있음.


Kubernetes 플러그인은 다중 선택지를 가짐. 여기서 볼 수 있는 pod 옵션은 클러스터에서 pod 레코드를 생성하는 역할을 함. DNS 서버가 해결할 수 있는 모든 레코드는 CoreDNS pod /etc/resolv.conf에 지정된 네임서버로 전달됨. /etc/resolv.conf 파일은 Kubernetes 노드의 네임서버를 사용하도록 설정. Corefile은 config map으로 pod에 전달됨. 이 구성을 수정할 필요가 있다면 configmap 객체를 수정할 수 있음.


적절한 Kubernetes 플러그인을 사용하여 CoreDNS pod를 실행. Kubernets 클러스터에 새 pod나 서비스를 확인하고, pod나 서비스가 생길  때마다 데이터베이스에 추가. 그 다음 pod에 CoreDNS 서버를 가리키도록함. DNS 서버에 도달하기 위해 pod는 무슨 주소를 사용하는가? CoreDNS solution을 배포할 때 클러스터 내 다른 구성요소들에서도 사용할 수 있도록 서비스 생성. 서비스 이름은 기본적으로 KubeDNS라는 이름을 가짐. 서비스의 IP 주소는 pod에 nameserver로 구성됨. pod가 생성될 때 자동적으로 Kubernetes가 pod에 DNS 구성을 함. kubelet이 담당. kubelet의 config 파일을 보면 그 안에 DNS 서버와 도메인의 IP가 표시됨. Pod가 올바른 네임서버로 구성되면 이제 다른 파드와 서비스를 해결 가능. web-service, web-service.defualt, web-service.default.svc.cluster.local


DNS 조회 또는 host web-service 명령을 사용하여 web-service를 수동으로 조회하려고 하면 정규화된 도메인 이름이 반환됨.


그러나 조회❌. web-service를 언급. 어떻게 전체 이름을 찾는가? resolv.conf 파일은 `defualt.svc.clsuter.local`, `svc.cluster.local`, `cluster local` search 항목을 가짐. 이렇게 하면 서비스를 찾을 수 있음. 그러나 서비스에 대한 검색 항목만 있으므로 pod에 동일한 방식으로 도달 불가. 이를 위해서는 pod의 전체 FQDN을 지정해야 함.


## Practice Test - Explore DNS

1. 클러스터에 구현된 DNS solution 찾기.

    ```bash
    k get po -n kube-system 
    NAME                                   READY   STATUS    RESTARTS   AGE
    coredns-7484cd47db-5zh4h               1/1     Running   0          17m
    coredns-7484cd47db-sghbk               1/1     Running   0          17m
    ```

2. DNS server의 pod 수는?
3. CoreDNS에 접근하기 위해 생성된 서비스의 이름은?

    ```bash
    k get svc -n kube-system 
    NAME       TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)                  AGE
    kube-dns   ClusterIP   172.20.0.10   <none>        53/UDP,53/TCP,9153/TCP   20m
    ```

4. 서비스를 해결하기 위해 pod에 구성해야 하는 Core DNS 서버의 IP는?

    172.20.0.10

5. CoreDNS service를 구성하기 위한 구성 파일의 위치

    /etc/coredns/Corefile

6. CoreDNS pod로 Corefile을 어떻게 넘기는가?

    Configured as a Configmap object

7. Corefile에 생성된 ConfigMap 객체의 이름은?

    ```bash
    k get configmap -n kube-system 
    NAME                                                   DATA   AGE
    coredns                                                1      24m
    ```

8. kubernetes 클러스터에 구성된 root domain/zone은? cluster.local
9. test 애플리케이션에서 hr web server로 접근하기 위해 사용될 수 있는 이릉은?

    web-service


    ```bash
    k exec test -- curl web-service
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100    24    0    24    0     0  12000      0 --:--:-- --:--:-- --:--:-- 12000
     This is the HR server!
    ```

10. test pod에서 hr 서비스에 접근하기 위해 사용할 수 없는 이름은? web-service.default.pod

    ```bash
    controlplane ~ ➜  k exec test -- curl web-service
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100    24    0    24    0     0  12000      0 --:--:-- --:--:-- --:--:-- 12000
     This is the HR server!
    
    controlplane ~ ➜  k exec test -- curl web-service.default.svc
     This is the HR server!
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100    24    0    24    0     0  12000      0 --:--:-- --:--:-- --:--:-- 12000
    
    controlplane ~ ➜  k exec test -- curl web-service.default
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
      0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0 This is the HR server!
    100    24    0    24    0     0  24000      0 --:--:-- --:--:-- --:--:-- 24000
    
    controlplane ~ ➜  k exec test -- curl web-service.default.pod
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
      0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: web-service.default.pod
    command terminated with exit code 6
    ```

11. test 애플리케이션에서 payroll service에 접근하기 위해 아래에서 사용될 수 있는 이름은?

    web-service.payroll

12. test 애플리케이션에서 payroll 서비스에 접근하기 위해 아래에서 사용될 수 없는 이름은?

    web-service.payroll.svc.cluster


    ```bash
    controlplane ~ ➜  k exec test -- curl web-service.payroll.svc
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100    29    0    29    0     0  14500      0 --:--:-- --:--:-- --:--:-- 14500
     This is the PayRoll server!
    
    controlplane ~ ➜  k exec test -- curl web-service.payroll.svc.cluster
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
      0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: web-service.payroll.svc.cluster
    command terminated with exit code 6
    
    controlplane ~ ✖ k exec test -- curl web-service.payroll
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
      0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0 This is the PayRoll server!
    100    29    0    29    0     0  29000      0 --:--:-- --:--:-- --:--:-- 29000
    
    controlplane ~ ➜  k exec test -- curl web-service.payroll.svc.cluster.local
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100    29    0    29    0     0   1611      0 --:--:-- --:--:-- --:--:--  1705
     This is the PayRoll server!
    ```

13. mysql에 접근하는 web server `web app` 을 배포. 그러나 웹 서버가 데이터베이스 서버에 연결되지 않음. 문제 해결하기.

    ```bash
    controlplane ~ ➜  k edit deployments.apps webapp 
    deployment.apps/webapp edited
    
    template:
      spec:
        containers:
        - env:
          - name: DB_Host
            value: mysql ➡️ mysql.payroll 로 수정.
    ```


    webapp은 deployment로 배포되었으므로 deployment 수정.

14. hr pod에서 mysql service를 nslookup하고 /root/CKA/nslookup.out 파일에 출력문 redirect

    ```bash
    controlplane ~ ➜  k exec hr -- nslookup mysql.payroll > CKA/nslookup.out
    
    controlplane ~ ➜  cat CKA/nslookup.out 
    Server:         172.20.0.10
    Address:        172.20.0.10#53
    
    Name:   mysql.payroll.svc.cluster.local
    Address: 172.20.170.107
    ```


## Ingress


application을 외부에서 접근할 수 있도록 하려면 NodePort로 생성. 사용자는 URL을 사용하여 접근 가능. http://IP:38080


사용자가 IP 주소로 접근하는 것을 원치 않음 → 노드의 IP를 가리키도록 DNS 서버 구성. 이제 사용자는 URL을 사용하여 접근 가능.


사용자가 포트 번호를 알기를 원치 않음. 그러나 NodePort는 높은 수의 포트를 할당할 수 있음 3만 이상. → 따라서 DNS 서버와 클러스터 사이에 포트 80에서 포트 38080으로 요청을 프록시하는 프록시 서버와 같은 추가 계층을 가져옴. → 데이터센터에서 on-premise로 호스팅되는 경우


GCP같은 퍼블릭 클라우드 환경인 경우


NodePort로 서비스를 생성하는 대신 LoadBalancer로 설정. Kubernetes는 NodePort로 했던 일을 계속 함. 이 외에도 네트워크 로드밸런서를 프로비저닝해달라는 요청을 보냄. 요청을 받으면 GCP는 모든 노드의 서비스 포트로 트래픽을 라우팅하고 해당 정보를 Kubernetes에 반환하도록 LoadBalancer를 자동으로 배포. 


사용자가 입력한 URL을 기반으로 각 LoadBalancer 간의 트래픽을 어떻게 유도할 수 있을까?


URL을 기반으로 트래픽을 다른 서비스로 리디렉션할 수 있는 또 다른 프록시 또는 LoadBalancer가 필요함.


ingress controller에서 SSL 및 URL 기반 라우팅 구성의 모든 로드 밸런싱을 수행하게 됨.


어떻게 동작하는가? 무엇인가? 어디에 있는가? 어떻게 볼 수 있고, 어떻게 구성할 수 있으며, 어떻게 부하 균형을 맞출 수 있는가? SSL은 어떻게 구현되는가?


ingress없이 어떻게 할 것인가? 역방향 프록시나 Nginx, HAProxy, 또는 Traefik과 같은 로드 밸런싱 솔루션을 사용할 것.


각 규칙 내에 다른 경로를 다룰 수 있음.


세 번째 유형의 구성은 도메인 이름이나 호스트 이름을 사용하는 것입니다.입력을 위한 유사한 정의 파일을 만드는 것부터 시작합니다.이제 두 개의 도메인 이름이 생겼으니, 각 도메인마다 하나씩 두 개의 규칙을 만듭니다.도메인 이름으로 트래픽을 분할하려면 호스트 필드를 사용합니다.각 규칙의 호스트 필드는 요청 URL에 사용된 도메인 이름과 지정된 값을 일치시키고 트래픽을 적절한 백엔드로 라우팅합니다.


각 규칙마다 백엔드 경로가 하나만 있어도 괜찮음. 이 도메인 이름들로부터의 모든 트래픽은 사용된 URL 경로에 관계없이 적절한 백엔드로 라우팅될 것. 각 URL을 처리하기 위해 여전히 여러 경로를 명세할 수 있음.


호스트 이름 별 트래픽을 표시하기 위해 각 규칙마다 두 개의 규칙과 하나의 경로 지정을 사용.


## Practice Test - Ingress Networking-1

1. Ingress Controller는 어느 네임스페이스에 배포되었는가? ingress-nginx

    ```bash
    controlplane ~ ➜  k get all --all-namespaces | grep -i ingress
    ingress-nginx   pod/ingress-nginx-admission-create-gs69h        0/1     Completed   0          118s
    ingress-nginx   pod/ingress-nginx-admission-patch-dnp5l         0/1     Completed   0          118s
    ingress-nginx   pod/ingress-nginx-controller-6c4c749b95-ppnlp   1/1     Running     0          118s
    ingress-nginx   service/ingress-nginx-controller             NodePort    172.20.142.88    <none>        80:30080/TCP,443:32103/TCP   119s
    ingress-nginx   service/ingress-nginx-controller-admission   ClusterIP   172.20.117.97    <none>        443/TCP                      119s
    ingress-nginx   deployment.apps/ingress-nginx-controller   1/1     1            1           118s
    ingress-nginx   replicaset.apps/ingress-nginx-controller-6c4c749b95   1         1         1       118s
    ingress-nginx   job.batch/ingress-nginx-admission-create   Complete   1/1           7s         118s
    ingress-nginx   job.batch/ingress-nginx-admission-patch    Complete   1/1           7s         118s
    ```

2. Ingress Controller Deployment의 이름은? ingress-nginx-controller
3. 애플리케이션이 배포된 네임스페이스는? app-space

    ```bash
    controlplane ~ ➜  k get all --all-namespaces | grep -i app
    
    app-space
           pod/default-backend-569f95b877-q87hp            1/1     Running     0          4m59s
    app-space       pod/webapp-video-7d6646445c-hgzcf               1/1     Running     0          4m59s
    app-space       pod/webapp-wear-7cf6df9954-42c5v                1/1     Running     0          4m59s
    app-space       service/default-backend-service              ClusterIP   172.20.32.151    <none>        80/TCP                       4m59s
    app-space       service/video-service                        ClusterIP   172.20.29.187    <none>        8080/TCP                     4m59s
    app-space       service/wear-service                         ClusterIP   172.20.107.182   <none>        8080/TCP                     4m59s
    kube-flannel   daemonset.apps/kube-flannel-ds   1         1         1       1            1           <none>                   16m
    kube-system    daemonset.apps/kube-proxy        1         1         1       1            1           kubernetes.io/os=linux   16m
    app-space       deployment.apps/default-backend            1/1     1            1           4m59s
    app-space       deployment.apps/webapp-video               1/1     1            1           4m59s
    app-space       deployment.apps/webapp-wear                1/1     1            1           4m59s
    ingress-nginx   deployment.apps/ingress-nginx-controller   1/1     1            1           4m57s
    kube-system     deployment.apps/coredns                    2/2     2            2           16m
    app-space       replicaset.apps/default-backend-569f95b877            1         1         1       4m59s
    app-space       replicaset.apps/webapp-video-7d6646445c               1         1         1       4m59s
    app-space       replicaset.apps/webapp-wear-7cf6df9954                1         1         1       4m59s
    ingress-nginx   replicaset.apps/ingress-nginx-controller-6c4c749b95   1         1         1       4m57s
    kube-system     replicaset.apps/coredns-7484cd47db                    2         2         2       16m
    ```

4. app-space에 배포된 애플리케이션 수.
5. Ingress 자원이 배포된 네임스페이스는?

    ```bash
    controlplane ~ ➜  k get ingress --all-namespaces
    NAMESPACE   NAME                 CLASS    HOSTS   ADDRESS         PORTS   AGE
    
    app-space
       ingress-wear-watch   <none>   *       172.20.142.88   80      7m51s
    ```

6. Ingress 자원의 이름은? ingress-wear-watch
7. Ingress Resource에 구성된 Host는?

    ```bash
    controlplane ~ ➜  k describe ingress -n app-space 
    Name:             ingress-wear-watch
    Labels:           <none>
    Namespace:        app-space
    Address:          172.20.142.88
    Ingress Class:    <none>
    Default backend:  <default>
    Rules:
      Host        Path  Backends
      ----        ----  --------
      
    *   
            
                  /wear    wear-service:8080 (172.17.0.4:8080)
                  /watch   video-service:8080 (172.17.0.5:8080)
    Annotations:  nginx.ingress.kubernetes.io/rewrite-target: /
                  nginx.ingress.kubernetes.io/ssl-redirect: false
    Events:
      Type    Reason  Age                    From                      Message
      ----    ------  ----                   ----                      -------
      Normal  Sync    8m37s (x2 over 8m37s)  nginx-ingress-controller  Scheduled for sync
    ```

8. ingress에 /wear 경로로 구성된 backend는? wear-service
9. ingress에 비디오 스트리밍 애플리케이션이 이용 가능하도록 만든 경로는? /watch
10. 요청이 ingress에서 구성된 경로 중 어느 것과도 일치하지 않는 경우, 요청은 어느 서비스로 전달되는가? default-backend-service
11. 터미널 상단의 탭을 사용하여 ingress 서비스 확인. 보이는 페이지는? 404 Error Page
12. 애플리케이션이 제공되는 URL을 변경해야 함. 비디오 애플리케이션을 /stream에서 사용할 수 있도록 하기

    ```bash
    controlplane ~ ➜  k edit ingress -n app-space
    spec:
      rules:
      - http:
          paths:
          - backend:
              service:
                name: wear-service
                port:
                  number: 8080
            path: /wear
            pathType: Prefix
          - backend:
              service:
                name: video-service
                port:
                  number: 8080
            path: /watch # ➡️ /stream으로 변경
            pathType: Prefix
    ```

13. 사용자가 ingress service에서 /eat URL을 보려고 함. 어느 페이지가 보이는가?  404 Error Page
14. 사용자가 food delivery 애플리케이션을 이용할 수 있도록 ingress에 새 경로 추가.

    ```bash
    controlplane ~ ➜  k edit ingress -n app-space
    - backend:
              service:
                name: food-service
                port:
                  number: 8080
            path: /eat
            pathType: Prefix
    ```

15. 새 payment 서비스 도입. 중요하기 때문에 그것만의 namespace에 새 애플리케이션 배포.

    ```bash
    controlplane ~ ➜  k get all -n critical-space 
    NAME                              READY   STATUS    RESTARTS   AGE
    pod/webapp-pay-7df499586f-mc5tl   1/1     Running   0          60s
    
    NAME                  TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
    service/pay-service   ClusterIP   172.20.88.102   <none>        8282/TCP   60s
    
    NAME                         READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/webapp-pay   1/1     1            1           60s
    
    NAME                                    DESIRED   CURRENT   READY   AGE
    replicaset.apps/webapp-pay-7df499586f   1         1         1       60s
    ```

16. 새 애플리케이션의 deployment 이름은? webapp-pay
17. /pay에 새 애플리케이션이 이용가능하도록 요청.

    ```bash
    controlplane ~ ➜  k get svc -n critical-space 
    NAME          TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
    pay-service   ClusterIP   172.20.88.102   <none>        8282/TCP   12m
    
    controlplane ~ ➜  k create ingress web-pay -n critical-space --rule=/pay=pay-service
    :8282
    ingress.networking.k8s.io/web-pay created
    
    controlplane ~ ➜  k edit ingress -n critical-space 
    ingress.networking.k8s.io/web-pay edited
    
    controlplane ~ ➜  k get ingress -n critical-space 
    NAME      CLASS    HOSTS   ADDRESS         PORTS   AGE
    web-pay   <none>   host    172.20.142.88   80      2m17s
    ```


    앱에 /pay 경로가 없어 404 페이지가 보임. 


    ```bash
    annotations:
      nginx.ingress.kubernetes.io/rewrite-target: /
    ```


    위 annotation을 추가해야 함.


## Practice Test - Ingress Networking -2

1. ingress controller를 배포하자. 먼저, ingress-nginx 네임스페이스 생성.

    ```bash
    controlplane ~ ➜  k create ns ingress-nginx
    namespace/ingress-nginx created
    ```

2. Nginx Ingress Controller는 Configmap 객체 요청. ingress-nginx 네임스페이스에 ingress-nginx-controller 이름을 가진 configmap 생성.

    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: ingress-nginx-controller
      namespace: ingress-nginx
    data:
    ```

3. NGINX ingress controller는 두 service account를 요구. ingress-nginx 네임스페이스에 ingress-nginx와 ingress-nginx-admission 이름을 가진 service account 생성.

    ```bash
    controlplane ~ ➜  k create serviceaccount ingress-nginx -n ingress-nginx
    serviceaccount/ingress-nginx created
    
    controlplane ~ ➜  k create serviceaccount ingress-nginx-admission -n ingress-nginx
    serviceaccount/ingress-nginx-admission created
    ```

4. serviceaccount에 대해 role, rolebinding, clusterrole, clusterrolebinding이 생성됨. 이제 Ingress Controller 배포. 주어진 파일을 사용하여 Kubernetes 객체 생성.

    deployment와 그것의 service가 ingress-controller.yaml에 주어짐. 몇몇 문제가 있으므로 수정.

5. ingress 자원을 생성하여 ingress service에서 /wear와 /watch에서 애플리케이션을 사용할 수 있도록 함. 또한 `rewirte-target`  주석 필드 사용.

    ```bash
    controlplane ~ ➜  k create ingress service-ingress -n app-space --rule=/wear=wear-ser
    vice:8080 --rule=/watch=video-service:8080 --annotation nginx.ingress.kubernetes.io/
    rewrite-target=/
    ingress.networking.k8s.io/service-ingress created
    ```


## Introduction to Gateway API


같은 Ingress 자원을 공유하는 두 서비스. 각 서비스가 서로 다른 팀이나 완전히 다른 조직이나 기업에 의해 관리된다면 어떠한가? 만약 wear-service가 팀 A에 의해 관리되고 video-service가 팀 B에 의해 관리된다면?


이 경우, 기본 ingress 자원은 여전히 단일 리소스로, 한 번에 한 팀만 관리 가능. 그래서 멀티 테넌트 환경에서 ingress가 challenge를 제기할 수 있음. 동일한 ingress 자원을 처리할 때 조정이 필요하며 충돌이 발생 가능.


ingress는 멀티 테넌시에 대한 충분한 지원이 부족. 또 다른 제한 사항은 규칙 구성 옵션. 입력은 호스트 매칭이나 경로 매칭과 같은 CTP 기반 규칙만 지원.


TCP/UDP 라우팅, 트래픽 분할, 헤더 조작, 인증, 속도 제한 등은 현재 지원되지 않음. 모두 컨트롤러에 의해 구성됨. 이러한 구성은 주석을 사용하여 컨트롤러에 전달됨.


따라서 CORS를 구성하는 등 다양한 입력 규칙에 지정된 실제 복잡한 주석을 볼 수 있음. 여기에는 NGINX 사양 구성이 있음. 두 번째 예에서는 trafik controller를 사용하고 있음. 그래서 여기에는 traefik과 관련된 몇 가지 구성이 있음. 이러한 구성이 각각  기본 컨트롤러인 NGINX와 Traeifk에 매우 구체적. 쿠버네티스도 이러한 설정에 대해 알지 못함. 그래서 옳고 그른지 확인 불가. 이러한 구성은 기본 컨트롤러로 전달될 뿐.


따라서 동일한 사용 사례에 대해 컨트롤러마다 다른 구성이 있음. 그리고 이러한 구성은 이러한 특정 컨트롤러에서만 사용 가능.


Gateway API는 7계층 라우팅과 4계층 라우팅에 초점을 맞춘 쿠버네티스 공식 프로젝트. 이 프로젝트는 service mesh api와 ingress load balancing의 다음 세대를 나타냄.


게이트웨이 API는 세 개의 개별 페르소나에 의해 관리되는 세 개의 개별 객체를 도입.


인프라 제공자는 gatewayclass를 구성. gatewayclass는 NGINX, Traefik 또는 기타 로드 밸런서와 같은 기본 네트워크 인프라를 정의. cluster operator는 gatewayclass 인스턴스인 gateway를 구성할 것.


애플리케이션 개발자가 생성한 HTTPRoute가 있음. HTTP route만 가능한 ingress와 달리 TCP GRPC route 등 가짐.


[Gateway API](https://kubernetes.io/docs/concepts/services-networking/gateway/)

> Ingress vs Gateway API
- TLS 설정

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: secure-app
      annotations:
        nginx.ingress.kubernetes.io/ssl-redirect: "true"
        nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
    spec:
      tls:
      - hosts:
        - secure.example.com
        secretName: tls-secret
    ```


    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: Gateway
    metadata:
      name: secure-gateway
    spec:
      gatewayClassName: example-gc
      listeners:
      - name: https
        port: 443
        protocol: HTTPS
        tls:
          mode: Terminate
          certificateRefs:
          - kind: Secret
            name: tls-secret
        allowRoutes:
          kinds:
          - kind: HTTPRoute
    ```

- Canary

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: canary-ingress
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-weight: "20"
    spec:
      rules:
      - http:
          paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: app-v2
                port:
                  number: 80
    ```


    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: HTTPRoute
    metadata:
      name: split-traffic
    spec:
      parentRefs:
      - name: app-gateway
      rules:
      - backendRefs:
        - name: app-v1
          port: 80
          weight: 80
        - name: app-v2
          port: 80
          weight: 20
    ```


## Practice Test - Gateway API

1. 쿠버네티스에서 Gateway를 정의하는 데 사용된 API resource는? Gateway
2. Gateway에서 allowRoute 필드의 목적은?

    To specify which namespaces can attach routes to the Gateway.

3. Kubernetes Gateway API에서 지원되지 않는 protocol은? ICMP
4. Gateway와 GatewayClass는 어떻게 다른가?

    GatewayClass defines how a Gateway is implemented by a controller.

5. Ingress 보다 Gateway API를 사용하는 주요 장점은?

    It supports more advanced routing and multi-protocol support.

6. Gateway API를 사용하기 위해서 Controller는 필수. controller로 NGINX Gateway Fabric 설치할 것. 설치를 위해 아래 단계 따르기.
    1. Install the Gateway API resources

        ```bash
        kubectl kustomize "https://github.com/nginx/nginx-gateway-fabric/config/crd/gateway-api/standard?ref=v1.5.1" | kubectl apply -f -
        ```

    2. Deploy the NGINX Gateway Fabric CRDs

        ```bash
        kubectl apply -f https://raw.githubusercontent.com/nginx/nginx-gateway-fabric/v1.6.1/deploy/crds.yaml
        ```

    3. Deploy NGINX Gateway Fabric

        ```bash
        kubectl apply -f https://raw.githubusercontent.com/nginx/nginx-gateway-fabric/v1.6.1/deploy/nodeport/deploy.yaml
        ```

    4. Verify the Deployment

        ```bash
        kubectl get pods -n nginx-gateway
        ```

    5. View the nignx-gateway service

        ```bash
        kubectl get svc -n nginx-gateway nginx-gateway -o yaml
        ```

    6. Update the nginx-gateway service to expose ports 30080 for HTTP and 30081 for HTTPS

        ```bash
        kubectl patch svc nginx-gateway -n nginx-gateway --type='json' -p='[
          {"op": "replace", "path": "/spec/ports/0/nodePort", "value": 30080},
          {"op": "replace", "path": "/spec/ports/1/nodePort", "value": 30081}
        ]'
        ```


    ```bash
    controlplane ~ ➜  kubectl kustomize "https://github.com/nginx/nginx-gateway-fabric/config/crd/gateway-api/standard?ref=v1.5.1" | kubectl apply -f -
    customresourcedefinition.apiextensions.k8s.io/gatewayclasses.gateway.networking.k8s.io created
    customresourcedefinition.apiextensions.k8s.io/gateways.gateway.networking.k8s.io created
    customresourcedefinition.apiextensions.k8s.io/grpcroutes.gateway.networking.k8s.io created
    customresourcedefinition.apiextensions.k8s.io/httproutes.gateway.networking.k8s.io created
    customresourcedefinition.apiextensions.k8s.io/referencegrants.gateway.networking.k8s.io created
    
    controlplane ~ ➜  kubectl apply -f https://raw.githubusercontent.com/nginx/nginx-gateway-fabric/v1.6.1/deploy/crds.yaml
    customresourcedefinition.apiextensions.k8s.io/clientsettingspolicies.gateway.nginx.org created
    customresourcedefinition.apiextensions.k8s.io/nginxgateways.gateway.nginx.org created
    customresourcedefinition.apiextensions.k8s.io/nginxproxies.gateway.nginx.org created
    customresourcedefinition.apiextensions.k8s.io/observabilitypolicies.gateway.nginx.org created
    customresourcedefinition.apiextensions.k8s.io/snippetsfilters.gateway.nginx.org created
    customresourcedefinition.apiextensions.k8s.io/upstreamsettingspolicies.gateway.nginx.org created
    
    controlplane ~ ➜  kubectl apply -f https://raw.githubusercontent.com/nginx/nginx-gateway-fabric/v1.6.1/deploy/nodeport/deploy.yaml
    namespace/nginx-gateway created
    serviceaccount/nginx-gateway created
    clusterrole.rbac.authorization.k8s.io/nginx-gateway created
    clusterrolebinding.rbac.authorization.k8s.io/nginx-gateway created
    configmap/nginx-includes-bootstrap created
    service/nginx-gateway created
    deployment.apps/nginx-gateway created
    gatewayclass.gateway.networking.k8s.io/nginx created
    nginxgateway.gateway.nginx.org/nginx-gateway-config created
    
    controlplane ~ ➜  kubectl get pods -n nginx-gateway
    NAME                            READY   STATUS     RESTARTS   AGE
    nginx-gateway-96f76cdcf-r8zzr   0/2     Init:0/1   0          3s
    
    controlplane ~ ➜  kubectl get svc -n nginx-gateway nginx-gateway -o yaml
    apiVersion: v1
    kind: Service
    metadata:
      annotations:
        kubectl.kubernetes.io/last-applied-configuration: |
          {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app.kubernetes.io/instance":"nginx-gateway","app.kubernetes.io/name":"nginx-gateway","app.kubernetes.io/version":"1.6.1"},"name":"nginx-gateway","namespace":"nginx-gateway"},"spec":{"externalTrafficPolicy":"Local","ports":[{"name":"http","port":80,"protocol":"TCP","targetPort":80},{"name":"https","port":443,"protocol":"TCP","targetPort":443}],"selector":{"app.kubernetes.io/instance":"nginx-gateway","app.kubernetes.io/name":"nginx-gateway"},"type":"NodePort"}}
      creationTimestamp: "2025-03-31T14:30:52Z"
      labels:
        app.kubernetes.io/instance: nginx-gateway
        app.kubernetes.io/name: nginx-gateway
        app.kubernetes.io/version: 1.6.1
      name: nginx-gateway
      namespace: nginx-gateway
      resourceVersion: "2727"
      uid: 35e063e9-088f-4ea2-8aa6-a1295158c7cc
    spec:
      clusterIP: 172.20.100.227
      clusterIPs:
      - 172.20.100.227
      externalTrafficPolicy: Local
      internalTrafficPolicy: Cluster
      ipFamilies:
      - IPv4
      ipFamilyPolicy: SingleStack
      ports:
      - name: http
        nodePort: 31554
        port: 80
        protocol: TCP
        targetPort: 80
      - name: https
        nodePort: 31737
        port: 443
        protocol: TCP
        targetPort: 443
      selector:
        app.kubernetes.io/instance: nginx-gateway
        app.kubernetes.io/name: nginx-gateway
      sessionAffinity: None
      type: NodePort
    status:
      loadBalancer: {}
    
    controlplane ~ ➜  kubectl patch svc nginx-gateway -n nginx-gateway --type='json' -p='[
      {"op": "replace", "path": "/spec/ports/0/nodePort", "value": 30080},
      {"op": "replace", "path": "/spec/ports/1/nodePort", "value": 30081}
    ]'
    service/nginx-gateway patched
    ```

7. 아래 요구사항에 따라 Kubernetes Gateway 리소스 생성.
    1. **Name**: `nginx-gateway`
    2. **Namespace**: `nginx-gateway`
    3. **Gateway Class Name**: `nginx`
    4. **Listeners**:
        - **Protocol**: `HTTP`
        - **Port**: `80`
        - **Name**: `http`
        - **Allowed Routes**: `All namespaces`

    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: Gateway
    metadata:
      name: nginx-gateway
      namespace: nginx-gateway
    spec:
      gatewayClassName: nginx
      listeners:
      - name: http
        protocol: HTTP
        port: 80
        allowedRoutes:
          namespaces:
            from: All
    ```

8. frontend-app이라는 pod와 frontend-svc라는 서비스가 기본 네임스페이스에 배포됨. frontend-route라는 HTTPRoute를 이용하여 ‘/’ 경로에서 서비스 노출.

    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: HTTPRoute
    metadata:
      name: frontend-route
    spec:
      parentRefs:
      - name: nginx-gateway
        namespace: nginx-gateway
      rules:
      - matches:
        - path:
            type: PathPrefix
            value: /
        backendRefs:
        - name: frontend-svc
          port: 80
    ```


    다른 네임스페이스에 있는 경우에는 namespace 항목을 추가하여 명시해주기.

