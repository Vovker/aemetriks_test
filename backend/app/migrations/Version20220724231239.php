<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220724231239 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cart (id INT AUTO_INCREMENT NOT NULL, value VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 1")');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 2")');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 3")');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 4")');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 5")');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 6")');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 7")');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 8")');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 9")');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 10")');
        $this->addSql('INSERT INTO cart (value) VALUES ("test 11")');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE cart');
    }
}
