# 20200704: 패널을 통한 와이파이 세팅

1. PANEL DUE와 보드 연결 확인
PANEL이 켜지면, 콘솔 창에 들어가 'M115' 명령을 입력하여 버전 확인  
'M552' 명령어 입력했을 때, 'Wifi module is disable'라고 뜬다.  
(Wifi module is enable이라 뜨면 3번으로)  
'M552 S0'을 입력하고, 'Wifi module started' 이라고 떠야 한다.
2. 와이파이 연결
'M552' 명령어 입력했을 때, 'Wifi module is idle' 이라 뜨면 Wifi 모듈 활성화 성공.  
'M587 S"네트워크SSID" P"네트워크비밀번호"' 명령어로 연결할 와이파이를 세팅한다.  
'M552 S1' 명령어를 입력하여 와이파이에 연결한다.
3. DWC 접속
 이후, PC에서 보드와 같은 와이파이에 접속한다.  
 웹에 보드 IP를 입력하면 [DWC](https://duet3d.dozuki.com/Wiki/Duet_Web_Control_Manual)에 접속 가능하다.

* [참조 링크](https://duet3d.dozuki.com/Guide/1.+Getting+Connected+to+your+Duet/7?lang=en)
