package roomy.entities;

import jakarta.persistence.*;
import roomy.constants.TokenType;

import java.time.LocalDateTime;

@Entity
@Table(name = "auth-token")
public class AuthToken {
    @Id @GeneratedValue private Long id;

    @ManyToOne private User user;
    private String token;
    @Enumerated(EnumType.STRING) private TokenType type;
    private LocalDateTime expiresAt;
}
